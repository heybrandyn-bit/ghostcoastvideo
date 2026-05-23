<?php
/**
 * Plugin Name: GCV Voicenote API
 * Description: Public POST endpoint that accepts an audio blob from the SPA Voicenote Drop, saves to uploads/voicenotes/, and emails the host.
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'rest_api_init', function () {
    register_rest_route( 'gcv/v1', '/voicenote', [
        'methods'             => 'POST',
        'callback'            => 'gcv_handle_voicenote',
        'permission_callback' => '__return_true',
    ] );
} );

/* ------------------------------------------------------------------ */
/*  Rate limiter (IP-based, 5 req/min via transient)                  */
/* ------------------------------------------------------------------ */
function gcv_vn_rate_limit(): bool {
    $ip  = preg_replace( '/[^0-9a-f.:]/i', '', $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0' );
    $key = 'gcv_vn_rl_' . md5( $ip );
    $hit = (int) get_transient( $key );

    if ( $hit >= 5 ) {
        return false;
    }

    set_transient( $key, $hit + 1, 60 );
    return true;
}

/* ------------------------------------------------------------------ */
/*  Handler                                                           */
/* ------------------------------------------------------------------ */
function gcv_handle_voicenote( WP_REST_Request $request ): WP_REST_Response {

    if ( ! gcv_vn_rate_limit() ) {
        return new WP_REST_Response( [
            'ok'      => false,
            'message' => 'Too many uploads from this address. Try again in a minute.',
        ], 429 );
    }

    // File present?
    if ( empty( $_FILES['audio'] ) || ! isset( $_FILES['audio']['tmp_name'] ) ) {
        return new WP_REST_Response( [
            'ok'      => false,
            'message' => 'No audio file received.',
        ], 400 );
    }

    $file = $_FILES['audio'];

    // Upload errors?
    if ( $file['error'] !== UPLOAD_ERR_OK ) {
        return new WP_REST_Response( [
            'ok'      => false,
            'message' => 'Upload error code ' . intval( $file['error'] ),
        ], 400 );
    }

    // Size cap: 8 MB. 2-minute Opus webm is typically ~2 MB.
    if ( $file['size'] > 8 * 1024 * 1024 ) {
        return new WP_REST_Response( [
            'ok'      => false,
            'message' => 'File too large (max 8 MB).',
        ], 413 );
    }

    if ( $file['size'] < 200 ) {
        return new WP_REST_Response( [
            'ok'      => false,
            'message' => 'File appears empty.',
        ], 400 );
    }

    // MIME check — accept audio/* and the common webm variants.
    $mime  = strtolower( (string) ( $file['type'] ?? '' ) );
    $okmime = str_starts_with( $mime, 'audio/' )
        || $mime === 'video/webm'
        || $mime === 'application/octet-stream'
        || $mime === '';
    if ( ! $okmime ) {
        return new WP_REST_Response( [
            'ok'      => false,
            'message' => 'Unsupported file type: ' . $mime,
        ], 415 );
    }

    // Slug sanitize.
    $slug = strtolower( preg_replace( '/[^a-z0-9-]/i', '', (string) ( $_POST['show_slug'] ?? 'unknown' ) ) );
    if ( $slug === '' || strlen( $slug ) > 40 ) {
        $slug = 'unknown';
    }

    $show_title = sanitize_text_field( (string) ( $_POST['show_title'] ?? $slug ) );

    // Destination directory.
    $uploads_root = WP_CONTENT_DIR . '/uploads/voicenotes/' . $slug;
    if ( ! is_dir( $uploads_root ) ) {
        if ( ! wp_mkdir_p( $uploads_root ) ) {
            return new WP_REST_Response( [
                'ok'      => false,
                'message' => 'Server could not create destination directory.',
            ], 500 );
        }
    }

    // Drop a deny-listing .htaccess (block dir browsing, allow direct file fetch).
    $listing_block = $uploads_root . '/../.htaccess';
    if ( ! file_exists( $listing_block ) ) {
        @file_put_contents( $listing_block, "Options -Indexes\n" );
    }

    // Generate unique filename.
    $ts       = gmdate( 'Ymd-His' );
    $rand     = substr( bin2hex( random_bytes( 4 ) ), 0, 8 );
    $filename = "vn-{$ts}-{$rand}.webm";
    $target   = $uploads_root . '/' . $filename;

    if ( ! move_uploaded_file( $file['tmp_name'], $target ) ) {
        return new WP_REST_Response( [
            'ok'      => false,
            'message' => 'Server could not store the upload.',
        ], 500 );
    }

    @chmod( $target, 0644 );

    // Public URL.
    $url = content_url( '/uploads/voicenotes/' . $slug . '/' . $filename );

    // Email the host.
    $to      = apply_filters( 'gcv_voicenote_recipient', 'hello@ghostcoast.video' );
    $subject = "[Voicenote] {$show_title} — new drop";
    $size_kb = round( $file['size'] / 1024 );
    $ip      = preg_replace( '/[^0-9a-f.:]/i', '', $_SERVER['REMOTE_ADDR'] ?? 'unknown' );
    $ua      = sanitize_text_field( substr( (string) ( $_SERVER['HTTP_USER_AGENT'] ?? '' ), 0, 240 ) );
    $body    = "New voicenote for: {$show_title}\n"
             . "Slug:  {$slug}\n"
             . "Size:  {$size_kb} KB\n"
             . "From:  {$ip}\n"
             . "Agent: {$ua}\n\n"
             . "Listen / download:\n{$url}\n";

    wp_mail( $to, $subject, $body );

    return new WP_REST_Response( [
        'ok'      => true,
        'message' => 'Voicenote delivered. Thank you!',
        'id'      => $filename,
    ], 200 );
}

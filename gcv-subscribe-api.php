<?php
/**
 * Plugin Name: GCV Subscribe API
 * Description: Public REST endpoints for FluentCRM — subscribe & contact forms.
 * Version: 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'rest_api_init', function () {

    // POST /wp-json/gcv/v1/subscribe
    register_rest_route( 'gcv/v1', '/subscribe', [
        'methods'             => 'POST',
        'callback'            => 'gcv_handle_subscribe',
        'permission_callback' => '__return_true',
    ] );

    // POST /wp-json/gcv/v1/contact
    register_rest_route( 'gcv/v1', '/contact', [
        'methods'             => 'POST',
        'callback'            => 'gcv_handle_contact',
        'permission_callback' => '__return_true',
    ] );

    // POST /wp-json/gcv/v1/host-apply
    register_rest_route( 'gcv/v1', '/host-apply', [
        'methods'             => 'POST',
        'callback'            => 'gcv_handle_host_apply',
        'permission_callback' => '__return_true',
    ] );

    // POST /wp-json/gcv/v1/guest-apply
    register_rest_route( 'gcv/v1', '/guest-apply', [
        'methods'             => 'POST',
        'callback'            => 'gcv_handle_guest_apply',
        'permission_callback' => '__return_true',
    ] );
} );

/* ------------------------------------------------------------------ */
/*  Rate limiter (IP-based, 10 req/min via transient)                 */
/* ------------------------------------------------------------------ */
function gcv_rate_limit(): bool {
    $ip  = preg_replace( '/[^0-9a-f.:]/i', '', $_SERVER['REMOTE_ADDR'] ?? '0.0.0.0' );
    $key = 'gcv_rl_' . md5( $ip );
    $hit = (int) get_transient( $key );

    if ( $hit >= 10 ) {
        return false;           // blocked
    }

    set_transient( $key, $hit + 1, 60 );
    return true;
}

/* ------------------------------------------------------------------ */
/*  Helper: get or create the "main" list in FluentCRM                */
/* ------------------------------------------------------------------ */
function gcv_get_main_list_id(): ?int {
    if ( ! function_exists( 'FluentCrmApi' ) ) {
        return null;
    }

    $listApi = FluentCrmApi( 'lists' );
    $lists   = $listApi->all();

    foreach ( $lists as $list ) {
        if ( strtolower( $list->slug ) === 'main' ) {
            return (int) $list->id;
        }
    }

    // Create the list via importBulk (the API class has no create method)
    $created = $listApi->importBulk( [ [ 'title' => 'Main', 'slug' => 'main' ] ] );

    return ! empty( $created[0] ) ? (int) $created[0]->id : null;
}

/* ------------------------------------------------------------------ */
/*  Helper: get or create a tag by slug                               */
/* ------------------------------------------------------------------ */
function gcv_ensure_tag( string $slug ): ?int {
    if ( ! function_exists( 'FluentCrmApi' ) ) {
        return null;
    }

    $tagApi = FluentCrmApi( 'tags' );
    $tags   = $tagApi->all();

    foreach ( $tags as $tag ) {
        if ( strtolower( $tag->slug ) === strtolower( $slug ) ) {
            return (int) $tag->id;
        }
    }

    // Create the tag via importBulk (the API class has no create method)
    $created = $tagApi->importBulk( [ [ 'title' => ucfirst( str_replace( '-', ' ', $slug ) ), 'slug' => $slug ] ] );

    return ! empty( $created[0] ) ? (int) $created[0]->id : null;
}

/* ------------------------------------------------------------------ */
/*  POST /gcv/v1/subscribe                                            */
/* ------------------------------------------------------------------ */
function gcv_handle_subscribe( WP_REST_Request $request ) {
    if ( ! gcv_rate_limit() ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Too many requests. Please wait a moment.' ], 429 );
    }

    $email = sanitize_email( $request->get_param( 'email' ) );
    $name  = sanitize_text_field( $request->get_param( 'name' ) ?? '' );
    $phone = sanitize_text_field( $request->get_param( 'phone' ) ?? '' );
    $show  = sanitize_title( $request->get_param( 'show' ) ?? '' );

    if ( ! is_email( $email ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'A valid email is required.' ], 400 );
    }

    if ( ! function_exists( 'FluentCrmApi' ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Newsletter system unavailable.' ], 500 );
    }

    $listId = gcv_get_main_list_id();
    if ( ! $listId ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Could not resolve mailing list.' ], 500 );
    }

    // Build tag IDs
    $tagIds = [];
    if ( $show ) {
        $tid = gcv_ensure_tag( $show );
        if ( $tid ) {
            $tagIds[] = $tid;
        }
    }

    // Split name into first / last
    $parts     = explode( ' ', trim( $name ), 2 );
    $firstName = $parts[0] ?? '';
    $lastName  = $parts[1] ?? '';

    $contactApi = FluentCrmApi( 'contacts' );
    $contact    = $contactApi->createOrUpdate( [
        'email'      => $email,
        'first_name' => $firstName,
        'last_name'  => $lastName,
        'phone'      => $phone,
        'status'     => 'subscribed',
    ] );

    if ( ! $contact ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Failed to create subscriber.' ], 500 );
    }

    // Attach list and tags
    $contact->attachLists( [ $listId ] );
    if ( ! empty( $tagIds ) ) {
        $contact->attachTags( $tagIds );
    }

    return new WP_REST_Response( [ 'success' => true ], 200 );
}

/* ------------------------------------------------------------------ */
/*  POST /gcv/v1/contact                                              */
/* ------------------------------------------------------------------ */
function gcv_handle_contact( WP_REST_Request $request ) {
    if ( ! gcv_rate_limit() ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Too many requests. Please wait a moment.' ], 429 );
    }

    $email    = sanitize_email( $request->get_param( 'email' ) );
    $name     = sanitize_text_field( $request->get_param( 'name' ) ?? '' );
    $business = sanitize_text_field( $request->get_param( 'business' ) ?? '' );
    $phone    = sanitize_text_field( $request->get_param( 'phone' ) ?? '' );
    $message  = sanitize_textarea_field( $request->get_param( 'message' ) ?? '' );

    if ( ! is_email( $email ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'A valid email is required.' ], 400 );
    }

    if ( ! function_exists( 'FluentCrmApi' ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Newsletter system unavailable.' ], 500 );
    }

    $listId = gcv_get_main_list_id();
    $tagId  = gcv_ensure_tag( 'contact-form' );

    $parts     = explode( ' ', trim( $name ), 2 );
    $firstName = $parts[0] ?? '';
    $lastName  = $parts[1] ?? '';

    $contactApi = FluentCrmApi( 'contacts' );
    $contact    = $contactApi->createOrUpdate( [
        'email'      => $email,
        'first_name' => $firstName,
        'last_name'  => $lastName,
        'phone'      => $phone,
        'status'     => 'subscribed',
    ] );

    if ( ! $contact ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Failed to create contact.' ], 500 );
    }

    if ( $listId ) {
        $contact->attachLists( [ $listId ] );
    }
    if ( $tagId ) {
        $contact->attachTags( [ $tagId ] );
    }

    // Send notification email
    $to      = 'hello@ghostcoast.video';
    $subject = 'New Contact Form Submission — Ghost Coast Video';
    $body    = "Name: {$name}\nBusiness: {$business}\nEmail: {$email}\nPhone: {$phone}\n\nMessage:\n{$message}";
    $headers = [ 'Reply-To: ' . $email ];

    wp_mail( $to, $subject, $body, $headers );

    return new WP_REST_Response( [ 'success' => true ], 200 );
}

/* ------------------------------------------------------------------ */
/*  POST /gcv/v1/host-apply                                           */
/* ------------------------------------------------------------------ */
function gcv_handle_host_apply( WP_REST_Request $request ) {
    if ( ! gcv_rate_limit() ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Too many requests. Please wait a moment.' ], 429 );
    }

    $email   = sanitize_email( $request->get_param( 'email' ) );
    $name    = sanitize_text_field( $request->get_param( 'name' ) ?? '' );
    $skills  = $request->get_param( 'skills' );
    $message = sanitize_textarea_field( $request->get_param( 'message' ) ?? '' );

    if ( ! is_email( $email ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'A valid email is required.' ], 400 );
    }

    // Sanitize skills array
    if ( ! is_array( $skills ) ) {
        $skills = [];
    }
    $skills = array_map( 'sanitize_text_field', $skills );

    if ( ! function_exists( 'FluentCrmApi' ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Newsletter system unavailable.' ], 500 );
    }

    $listId = gcv_get_main_list_id();
    $tagId  = gcv_ensure_tag( 'host-application' );

    $parts     = explode( ' ', trim( $name ), 2 );
    $firstName = $parts[0] ?? '';
    $lastName  = $parts[1] ?? '';

    $contactApi = FluentCrmApi( 'contacts' );
    $contact    = $contactApi->createOrUpdate( [
        'email'      => $email,
        'first_name' => $firstName,
        'last_name'  => $lastName,
        'status'     => 'subscribed',
    ] );

    if ( ! $contact ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Failed to create contact.' ], 500 );
    }

    if ( $listId ) {
        $contact->attachLists( [ $listId ] );
    }
    if ( $tagId ) {
        $contact->attachTags( [ $tagId ] );
    }

    // Send notification email
    $skillsList = implode( ', ', $skills );
    $to         = 'hello@ghostcoast.video';
    $subject    = 'New Host Application — Ghost Coast Radio';
    $body       = "Name: {$name}\nEmail: {$email}\nSkills: {$skillsList}\n\nMessage:\n{$message}";
    $headers    = [ 'Reply-To: ' . $email ];

    wp_mail( $to, $subject, $body, $headers );

    return new WP_REST_Response( [ 'success' => true ], 200 );
}

/* ------------------------------------------------------------------ */
/*  POST /gcv/v1/guest-apply                                          */
/* ------------------------------------------------------------------ */
function gcv_handle_guest_apply( WP_REST_Request $request ) {
    if ( ! gcv_rate_limit() ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Too many requests. Please wait a moment.' ], 429 );
    }

    $email = sanitize_email( $request->get_param( 'email' ) );
    $name  = sanitize_text_field( $request->get_param( 'name' ) ?? '' );
    $show  = sanitize_title( $request->get_param( 'show' ) ?? '' );
    $topic = sanitize_textarea_field( $request->get_param( 'topic' ) ?? '' );

    if ( ! is_email( $email ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'A valid email is required.' ], 400 );
    }

    if ( ! function_exists( 'FluentCrmApi' ) ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Newsletter system unavailable.' ], 500 );
    }

    $listId = gcv_get_main_list_id();

    // Tag with "guest-application" + show slug
    $tagIds = [];
    $guestTagId = gcv_ensure_tag( 'guest-application' );
    if ( $guestTagId ) {
        $tagIds[] = $guestTagId;
    }
    if ( $show ) {
        $showTagId = gcv_ensure_tag( $show );
        if ( $showTagId ) {
            $tagIds[] = $showTagId;
        }
    }

    $parts     = explode( ' ', trim( $name ), 2 );
    $firstName = $parts[0] ?? '';
    $lastName  = $parts[1] ?? '';

    $contactApi = FluentCrmApi( 'contacts' );
    $contact    = $contactApi->createOrUpdate( [
        'email'      => $email,
        'first_name' => $firstName,
        'last_name'  => $lastName,
        'status'     => 'subscribed',
    ] );

    if ( ! $contact ) {
        return new WP_REST_Response( [ 'success' => false, 'message' => 'Failed to create contact.' ], 500 );
    }

    if ( $listId ) {
        $contact->attachLists( [ $listId ] );
    }
    if ( ! empty( $tagIds ) ) {
        $contact->attachTags( $tagIds );
    }

    // Send notification email
    $to      = 'hello@ghostcoast.video';
    $subject = 'New Guest Application — Ghost Coast Radio';
    $body    = "Name: {$name}\nEmail: {$email}\nShow: {$show}\n\nTopic / Pitch:\n{$topic}";
    $headers = [ 'Reply-To: ' . $email ];

    wp_mail( $to, $subject, $body, $headers );

    return new WP_REST_Response( [ 'success' => true ], 200 );
}

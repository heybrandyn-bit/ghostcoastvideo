# Ghost Coast Video — Project Context

## Site
- **Domain:** ghostcoast.video
- **Stack:** React/Vite SPA at `/`, WordPress (Avada) at `/blog/`
- **Server:** GreenGeeks, SSH user `sundaysu`, host `ghostcoast.video`
- **Server path:** `/home/sundaysu/public_html/ghostcoast/`
- **WordPress path:** `/home/sundaysu/public_html/ghostcoast/blog/`

## Build & Deploy
```bash
cd C:\Users\Brandyn\Documents\Literature\replyalpha
npm run build
scp -r dist/. sundaysu@ghostcoast.video:/home/sundaysu/public_html/ghostcoast/
```

## WordPress REST API
**Uses `?rest_route=` format, NOT `/wp-json/`.**
- Correct: `/blog/?rest_route=/gcv/v1/subscribe`
- Wrong (404): `/blog/wp-json/gcv/v1/subscribe`

## FluentCRM API Quirks
- `FluentCrmApi('lists')` and `FluentCrmApi('tags')` have NO `create()` method
- Use `importBulk()` instead: `FluentCrmApi('lists')->importBulk([ ['title' => 'Main', 'slug' => 'main'] ])`
- `FluentCrmApi('contacts')->createOrUpdate([...])` works as expected
- `->attachLists()` and `->attachTags()` work on the returned contact model

## mu-plugin
- **File:** `gcv-subscribe-api.php` (local copy in repo root, deployed to `blog/wp-content/mu-plugins/`)
- **Endpoints:** `POST /gcv/v1/subscribe`, `POST /gcv/v1/contact`, `POST /gcv/v1/host-apply`, `POST /gcv/v1/guest-apply`

## Show Data
- `src/data/showData.ts` — ShowConfig interface with slug, title, hosts, sections, links, theme
- Show pages render conditionally based on `sections` flags (episodes, pressKit, subscribe, etc.)

## GitHub
- **Repo:** `heybrandyn-bit/coderocket-v8zSmbItZAC`
- **Auth:** SSH (ed25519 key, no passphrase)
- **Workflow:** pull → edit → test locally → commit → push → build → SCP deploy

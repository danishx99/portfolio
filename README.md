# Portfolio

Personal portfolio for [danishsaleem.dev](https://danishsaleem.dev). A terminal-themed single page with an interactive command interface and an info panel for About / Projects / Tools / Work / Contact.

## Stack

Vanilla HTML, CSS, and JavaScript. No framework, no build step beyond a `cp` script. Deployed as static assets via Cloudflare Workers (Wrangler).

## Layout

```
index.html              entry point
script.js               terminal logic + sidebar rendering
styles.css              styling
favicon.svg
Danish_Saleem_CV.pdf    downloadable CV (served from /)
assets/icons/           self-hosted brand SVGs for the project stack icons
build.sh                copies source files into ./dist for deploy
wrangler.jsonc          Cloudflare Workers config
```

All page content (projects, tools, work, contact, about) lives in the `data` object at the top of `script.js`. Edit there to update copy.

## Local development

```sh
sh build.sh
npx wrangler dev
```

## Deploy

Pushes to `master` auto-deploy via Cloudflare's git integration. To deploy manually:

```sh
sh build.sh
npx wrangler deploy
```

## Terminal commands

`help`, `whoami`, `projects`, `tools`, `work`, `contact`, `resume`, `ls`, `clear`. Each command is defined in the `commands` object in `script.js`.

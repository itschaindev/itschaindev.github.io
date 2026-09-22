## Personal Blog

This is a place where I will write about my thoughts occassionally.
Topics would mostly consist of philosophy, tech and social causes that I care about.

Built with [Eleventy](https://www.11ty.dev) and published to GitHub Pages at [jagrut.xyz](https://jagrut.xyz).

## Writing

Posts live in `_posts/` as `YYYY-MM-DD-title.md`. The date in the file name is the post date
and the file name becomes the URL (`/YYYY-MM-DD-title/`).

```yaml
---
layout: post
title: Post title
subtitle: Optional one-line summary   # shown in italics under the title
tags: [philosophy, privacy]           # optional, listed on /tags/
---
```

Unfinished notes go in `_drafts/`, which is never built.

## Design

The look follows the Bear Blog theme: one typeface (Baskervville, self-hosted in `css/fonts/`),
one font size, cream background, plain underlined links, dashed rules. Light and dark follow the
system setting, and the small moon/sun button in the header overrides it.

- Colours, width and font are the custom properties at the top of `css/main.css`.
- Site title, tagline, navigation and footer links are in `_data/site.json`.
- Page shells are in `_layouts/`, shared fragments in `_includes/` (Liquid templates).
- `feed.liquid`, `sitemap.liquid` and `robots.liquid` generate `/feed.xml`, `/sitemap.xml` and `/robots.txt`.

## Local development

Requires Node 20 or newer.

```bash
npm install
npm run serve      # http://localhost:8080/ with live reload
npm run build      # writes the site to _site/
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages. The repository's Pages source must be set to "GitHub Actions" (Settings -> Pages).

## Credits

Built on Eleventy with a look modelled on [Bear Blog](https://bearblog.dev).

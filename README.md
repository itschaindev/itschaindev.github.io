## Personal Blog

This is a place where I will write about my thoughts occassionally.
Topics would mostly consist of philosophy, tech and social causes that I care about.

Built with [Zola](https://www.getzola.org) and the [Serene](https://github.com/isunjn/serene) theme,
published to GitHub Pages at [jagrut.xyz](https://jagrut.xyz).

## Writing

Posts are Markdown files in `content/posts/` named `YYYY-MM-DD-title.md`. The date in the file name
is the post date and the rest becomes the URL (`/posts/title/`).

```toml
+++
title = "Post title"
description = "One-line summary used for the meta description and previews"
draft = true                 # remove to publish; drafts only build with `zola serve --drafts`

[taxonomies]
tags = ["philosophy"]        # optional; uncomment the tags entry in zola.toml's nav once posts have tags

[extra]
toc = true                   # per-post overrides, see themes/serene/USAGE.md
+++
```

The five posts from before 2026 carry an `aliases` entry so their old `/YYYY-MM-DD-title/` addresses
redirect to the new ones; `/aboutme/` redirects to `/about/` the same way.

## Layout

- `zola.toml` — site settings; everything under `[extra]` is the theme's (name, bio, links, nav,
  colour scheme, display defaults). Start from `themes/serene/zola.toml.example` when the theme updates.
- `content/_index.md` — home page text, `content/posts/_index.md` — blog section, `content/about/_index.md` — about page.
- `static/img/` — favicons and images used in posts; `static/font/` holds the self-hosted font files (Atkinson Hyperlegible Next in use, Literata kept declared).
- `templates/_custom_font.html` and `templates/_custom_css.html` — the theme's override hooks: the first declares
  the font faces, the second sets `--main-font` (switch fonts there) and the theme's colour and size variables.
- `themes/serene/` — the theme, as a git submodule on its `latest` branch. Do not edit files inside it;
  to customise, copy a file from the theme into `templates/` or `static/` at the repo root
  (for example `templates/_custom_css.html` for colours and fonts). See `themes/serene/USAGE.md`.

## Local development

Zola is a single binary: `mise install` (reads `mise.toml`) or `brew install zola`.
After cloning, fetch the theme with `git submodule update --init`.

```bash
zola serve            # http://127.0.0.1:1111/ with live reload
zola serve --drafts   # include drafts
zola build            # writes the site to public/
```

Update the theme with `git submodule update --remote themes/serene` after checking its changelog.

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which builds the site and deploys it
to GitHub Pages. The repository's Pages source must be set to "GitHub Actions" (Settings -> Pages).

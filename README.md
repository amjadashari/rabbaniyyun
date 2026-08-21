# Rabbaniyyun — Cloudflare Pages edition

This project migrates the publishing workflow away from Blogger while preserving Rabbaniyyun's editorial structure.

## What is included

- `/` English home
- `/my/` Bahasa Melayu home
- `/articles/` general articles
- `/sahabat/` chronological Sahabat + Sahabiyah library
- `/sahabat/<slug>/` individual Sahabat articles
- `/sahabiyah/<slug>/` individual Sahabiyah articles
- `/authors/` author directory
- 112 editable Sahabat/Sahabiyah Markdown files
- Pages CMS configuration (`.pages.yml`)
- dark mode and responsive article layout

## Cloudflare Pages

1. Push this folder to a GitHub repository.
2. Cloudflare Dashboard → Workers & Pages → Create → Pages → Connect to Git.
3. Build command: `npm run build`
4. Build output directory: `dist`
5. Node version: 22 or newer.
6. Deploy.

## Editing without Blogger

1. Open `https://app.pagescms.org`.
2. Sign in with GitHub and install the Pages CMS GitHub App for the repository.
3. Select the repository. Pages CMS reads `.pages.yml`.
4. Editors can create/edit Sahabat, Sahabiyah, general articles, authors and images using forms + rich text.
5. Every save becomes a Git commit; Cloudflare Pages then redeploys automatically.

## Article workflow

Each file in `src/data/sahabat/` is one article. Frontmatter controls the card and article metadata. The Markdown body is the article itself.

Example:

```md
---
title: "Abu Bakr al-Siddiq"
slug: "abu-bakr-al-siddiq"
section: "sahabat"
gender: "male"
era: "early_makkah"
timeline_order: 2
role: "Pedagang & sahabat terdekat"
badges: ["jannah", "badr", "muhajir"]
card_image: "/images/sahabat/abu-bakr-al-siddiq.webp"
excerpt: "..."
authors: ["fathi"]
status: "published"
published: true
published_at: "2026-08-20"
---

Write the full article here.
```

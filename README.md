# Barış Taşın · personal site

A static site built with [Astro](https://astro.build). Every page is generated from Markdown files, so adding content means adding or editing a text file.

## Run it on your computer

1. Install Node.js 24 (LTS) from nodejs.org.
2. In this folder, run `npm install` once.
3. Run `npm run dev` and open http://localhost:4321.

While `npm run dev` runs, every saved change shows up in the browser right away. Drafts are visible locally and never published.

## Where things live

| What | Where |
| --- | --- |
| Name, tagline, tabs, chapters, links, Impressum details | `src/site.config.ts` |
| Career levels (one file each) | `src/content/career/` |
| Career images | `src/content/career/images/` |
| Short mp4 clips | `public/videos/` |
| Reading journal entries | `src/content/reading/` |
| History & Money entries | `src/content/history/` |
| Colors, fonts, layout | `src/styles/global.css` |

Each content folder has a `_template.md` that lists every field with a short note. Copy it, rename it, fill it in. Files starting with `_` are ignored.

Playable builds (Unity WebGL, Godot web exports) are best uploaded to itch.io and embedded with the `itch` media type. A video or game embed loads only after the visitor clicks, so nothing reaches YouTube or itch.io before that.

## Publish on GitHub Pages

1. Create a public repository named `<your-username>.github.io` and push this folder to its `main` branch.
2. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`. The site appears at `https://<your-username>.github.io`.
4. Set `site` in `astro.config.mjs` to that address.

A custom domain can be added later: put the domain in `public/CNAME`, point its DNS to GitHub Pages and change `site` to the domain.

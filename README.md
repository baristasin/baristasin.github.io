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
| Name, tagline, header tabs, chapters, links, Impressum details | `src/site.config.ts` |
| Photo at the top of the home page | `src/assets/home/hero.jpg` (its quote, caption and crop: `hero` in `src/site.config.ts`) |
| Portrait in the About section | `src/assets/home/portrait.jpg` |
| About text | `src/content/about.md` |
| Career levels (one file each) | `src/content/career/` |
| Career images | `src/content/career/images/` |
| Short mp4 clips | `public/videos/` |
| Reading journal entries | `src/content/reading/` |
| History & Money entries | `src/content/history/` |
| Colors (including the dark career map), fonts, sizes | `src/styles/tokens.css` |
| Shared layout and career map styles | `src/styles/global.css` |
| Header, photo band, About section, footer | their files in `src/components/` |

Each content folder has a `_template.md` that lists every field with a short note. Copy it, rename it, fill it in. Files starting with `_` are ignored.

In a career level, `summary` shows on the level's card. The Details panel, which opens when a visitor clicks the level, shows `credits` as small "My role" labels, then the text under the frontmatter, then the `media`.

To change a photo, replace the file and keep its name. Astro makes the smaller versions for phones by itself. Photos around 3000 px on the long side are enough. This repository is public, so remove location data (EXIF/GPS) from a photo before you commit it.

Playable builds (Unity WebGL, Godot web exports) are best uploaded to itch.io and embedded with the `itch` media type. A video or game embed loads only after the visitor clicks, so nothing reaches YouTube or itch.io before that.

## Publish on GitHub Pages

1. Create a public repository named `<your-username>.github.io` and push this folder to its `main` branch.
2. On GitHub: **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Every push to `main` builds and publishes the site through `.github/workflows/deploy.yml`. The site appears at `https://<your-username>.github.io`.
4. Set `site` in `astro.config.mjs` to that address.

A custom domain can be added later under **Settings → Pages → Custom domain**, after pointing its DNS to GitHub Pages. Then change `site` in `astro.config.mjs` to the domain.

## Credits

The look of the home page, header and footer is adapted from [Astro Chalet](https://github.com/apupsis/astro-chalet) by Antoine Grange, under the MIT license. Its license text is in `LICENSES/astro-chalet.txt`.

---
# Copy this file to add a level. The new file's name becomes the level's link
# (for example `my-project.md` → /#my-project). Files starting with _ are ignored.

level: 11                      # order on the map; the highest number is the newest
title: Project name
mapName: Short name            # optional: shorter name for the map
subtitle: One line under the title
years: "2027"                  # optional
chapter: 3                     # which chapter in src/site.config.ts
role: Your role
summary: "One or two sentences shown on the level's card."
credits:                       # optional: what you did, shown as small labels at the top of Details
  - Solo programmer
  - Design contributor
stats:                         # optional: numbers that stand out
  - 1M+ players
tags:                          # optional
  - Unity
media:                         # optional: shown in the Details panel, in this order
  - type: image                # put images next to this file, e.g. in images/
    src: ./images/project-1.jpg
    alt: What the picture shows
    caption: Optional caption
  - type: video                # short mp4 files go in public/videos/
    src: /videos/project-loop.mp4
    title: Gameplay loop
  - type: youtube              # the part after "v=" in a YouTube link
    id: VIDEO_ID
    title: Trailer
  - type: itch                 # the address from itch.io's embed code
    embedUrl: https://itch.io/embed-upload/GAME_ID
    title: Play the prototype
    height: 480
  - type: link
    url: https://example.com
    label: Project page
---

The longer description goes here and shows in the Details panel, above the media.
Plain Markdown: paragraphs, **bold**, [links](https://example.com). Leave it empty if the summary says enough.

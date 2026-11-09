import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Files whose name starts with an underscore (like _template.md) are skipped.
const markdownFiles = '**/[^_]*.md';

// One Markdown file per career level. `summary` shows on the level's card;
// the media and the text under the frontmatter show in the Details panel.
const career = defineCollection({
  loader: glob({ pattern: markdownFiles, base: './src/content/career' }),
  schema: ({ image }) =>
    z.object({
      level: z.number(),
      title: z.string(),
      mapName: z.string().optional(),
      subtitle: z.string(),
      years: z.string().optional(),
      chapter: z.number(),
      role: z.string(),
      summary: z.string(),
      credits: z.array(z.string()).default([]),
      stats: z.array(z.string()).default([]),
      tags: z.array(z.string()).default([]),
      media: z
        .array(
          z.discriminatedUnion('type', [
            z.object({ type: z.literal('image'), src: image(), alt: z.string(), caption: z.string().optional() }),
            z.object({
              type: z.literal('video'),
              src: z.string(),
              poster: z.string().optional(),
              title: z.string(),
              portrait: z.boolean().default(false),
            }),
            z.object({ type: z.literal('youtube'), id: z.string(), title: z.string() }),
            z.object({ type: z.literal('itch'), embedUrl: z.string(), title: z.string(), height: z.number().default(480) }),
            z.object({ type: z.literal('link'), url: z.string(), label: z.string() }),
          ]),
        )
        .default([]),
    }),
});

// Writing sections share one shape.
function createWritingCollection(folder: string) {
  return defineCollection({
    loader: glob({ pattern: markdownFiles, base: `./src/content/${folder}` }),
    schema: z.object({
      title: z.string(),
      date: z.coerce.date(),
      summary: z.string(),
      author: z.string().optional(),
      work: z.string().optional(),
      tags: z.array(z.string()).default([]),
      draft: z.boolean().default(false),
    }),
  });
}

export const collections = {
  career,
  reading: createWritingCollection('reading'),
  history: createWritingCollection('history'),
};

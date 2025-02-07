// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define a `loader` and `schema` for each collection

const programs = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/programs" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      image2: z.object({
        src: image(),
        alt: z.string()
      }),
      tags: z.array(z.string()),
      featured: z.boolean()
    })
});

const events = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/events" }),
    schema: ({ image }) => z.object({
      title: z.string(),
      schoolYear: z.string(),
      date: z.date().optional(),
      location: z.string().optional(),
      description: z.string(),
      coverImageSrc: z.string(),
      coverImageAlt: z.string(),
      featured: z.boolean()
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { programs, events };
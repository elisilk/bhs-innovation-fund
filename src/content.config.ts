// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
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
// Export a single `collections` object to register your collection(s)
export const collections = { programs };
import { glob } from "astro/loaders";
import { z } from "astro/zod";
import { defineCollection } from "astro:content";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.union([z.iso.date(), z.iso.datetime({ offset: true })]),
    description: z.string(),
  }),
});

export const collections = { blog };

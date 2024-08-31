import { z, defineCollection } from 'astro:content';
import { ArticleTag } from 'src/types';

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    createdOn: z.date(),
    updatedOn: z.date().optional(),
    tags: z.array(z.nativeEnum(ArticleTag)).default([ArticleTag.OTHER]),
  }),
});

export const collections = {
  articles: articlesCollection,
};

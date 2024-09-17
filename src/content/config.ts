import { z, defineCollection } from 'astro:content';
import { ArticleTag } from '@/constants';

const DEFAULT_ARTICLE_TAGS = [ArticleTag.OTHER];

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    createdOn: z.date(),
    updatedOn: z.date().optional(),
    tags: z.array(z.nativeEnum(ArticleTag)).default(DEFAULT_ARTICLE_TAGS),
  }),
});

export const collections = {
  articles: articlesCollection,
};

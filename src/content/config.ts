import { z, defineCollection } from 'astro:content';
import { ArticleTag } from '@/constants';

const DEFAULT_ARTICLE_TAGS = [ArticleTag.OTHER];

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    draft: z.boolean().optional(),
    title: z.string(),
    createdOn: z.date(),
    updatedOn: z.date().optional(),
    xPostLink: z.string().url().optional(),
    tags: z.array(z.nativeEnum(ArticleTag)).default(DEFAULT_ARTICLE_TAGS),
  }),
});

export const collections = {
  articles: articlesCollection,
};

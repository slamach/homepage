import { getCollection, type CollectionEntry } from 'astro:content';

export enum ArticlesSortOrder {
  CREATED_ON = 'created_on',
}

export const getSortedArticles = (
  articles: CollectionEntry<'articles'>[],
  sortOrder: ArticlesSortOrder,
) => {
  switch (sortOrder) {
    case ArticlesSortOrder.CREATED_ON:
      return articles.toSorted((a, b) => {
        return (
          new Date(b.data.createdOn).getTime() -
          new Date(a.data.createdOn).getTime()
        );
      });
    default:
      return articles;
  }
};

export const getAvailableArticles = async () => {
  const allArticles = await getCollection('articles');

  return allArticles.filter(
    (article) => !(import.meta.env.PROD && article.data.draft),
  );
};

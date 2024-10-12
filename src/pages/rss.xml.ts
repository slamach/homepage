import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {
  ArticlesSortOrder,
  getSortedArticles,
} from '@/utils/getSortedArticles';
import { config } from '@/constants';

// TODO: Add article content to the RSS feed

export async function GET() {
  const articles = getSortedArticles(
    await getCollection('articles'),
    ArticlesSortOrder.CREATED_ON,
  );

  return rss({
    title: config.website.title,
    description: config.website.description,
    site: config.website.url,
    trailingSlash: false,
    items: articles.map((article) => ({
      title: article.data.title,
      pubDate: article.data.createdOn,
      link: `/articles/${article.slug}`,
    })),
  });
}

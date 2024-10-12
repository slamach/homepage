import rss from '@astrojs/rss';
import {
  ArticlesSortOrder,
  getAvailableArticles,
  getSortedArticles,
} from '@/utils/getArticles';
import { config } from '@/constants';

// TODO: Add article content to the RSS feed

export async function GET() {
  const articles = getSortedArticles(
    await getAvailableArticles(),
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

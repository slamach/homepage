export enum ArticleTag {
  FRONTEND = 'frontend',
  REACT = 'react',
  CSS = 'css',
  OTHER = 'other',
}

export interface ArticleFrontmatter {
  title: string;
  createdOn: string;
  updatedOn?: string;
  tags?: ArticleTag[];
}

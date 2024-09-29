export const config = {
  links: {
    resume: '#', // TODO: Add resume link
    buymeacoffee: '#', // TODO: Add buymeacoffee link
    telegram: 'https://t.me/slamach',
    github: 'https://github.com/slamach',
    blogSourceCode: 'https://github.com/slamach/homepage',
    linkedin: 'https://www.linkedin.com/in/slamach/',
  },
  email: 'sviridov.dvv@gmail.com',
};

export enum ArticleTag {
  FRONTEND = 'frontend',
  REACT = 'react',
  CSS = 'css',
  OTHER = 'other',
}

export const ARTICLE_TAGS = Object.values(ArticleTag);

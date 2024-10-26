export const config = {
  website: {
    title: 'Dmitrii Sviridov',
    description:
      'Personal blog of a front-end developer, ' +
      'who loves making high-performance web interfaces and ' +
      'helping others navigate the tech world.',
    url: 'https://dmitriisviridov.com',
  },
  links: {
    resume: '#', // TODO: Add resume link
    buymeacoffee: 'https://buymeacoffee.com/slamach',
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

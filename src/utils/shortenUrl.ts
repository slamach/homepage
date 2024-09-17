export const shortenUrl = (link: string) => {
  const url = new URL(link);
  let shortUrl = url.hostname + url.pathname;

  if (shortUrl.startsWith('www.')) {
    shortUrl = shortUrl.slice(4);
  }

  if (shortUrl.endsWith('/')) {
    shortUrl = shortUrl.slice(0, -1);
  }

  return shortUrl;
};

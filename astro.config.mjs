import { defineConfig } from 'astro/config';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';
import { config } from './src/constants';

export default defineConfig({
  site: config.website.url,
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      defaultColor: false,
    },
  },
});

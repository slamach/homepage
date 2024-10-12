import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [
    icon({
      iconDir: 'src/assets/icons',
    }),
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

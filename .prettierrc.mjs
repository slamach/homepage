/** @type {import("prettier").Config} */
export default {
  singleQuote: true,
  bracketSameLine: false,
  htmlWhitespaceSensitivity: 'ignore',
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

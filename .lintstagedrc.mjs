export default {
  '**/*': 'prettier --write --ignore-unknown',
  '**/*.{js,mjs,cjs,ts,astro}': 'eslint --fix',
};

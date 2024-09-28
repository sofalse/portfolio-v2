/** @typedef {import('prettier').Config} PrettierConfig */

/** @type {PrettierConfig} */
const config = {
  arrowParens: 'always',
  printWidth: 120,
  singleQuote: false,
  semi: true,
  tabWidth: 2,
  trailingComma: 'all',
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-tailwindcss'],
  proseWrap: 'always',
};

module.exports = config;

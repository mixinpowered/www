/** @type {import("prettier").Config} */
export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  singleQuote: true,
  semi: false,
  trailingComma: 'all',
  arrowParens: 'always',
  endOfLine: 'lf'
};
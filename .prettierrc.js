// more on config options https://prettier.io/docs/en/options.html
module.exports = {
  printWidth: 100,
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  singleAttributePerLine: true,
  overrides: [
    {
      files: ['src/**/*.ts', 'vite.config.ts'],
      options: { parser: 'typescript' },
    },
  ],
}

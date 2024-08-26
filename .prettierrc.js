module.exports = {
  trailingComma: 'all',
  tabWidth: 2,
  semi: false,
  quoteProps: 'as-needed',
  singleQuote: true,
  arrowParens: 'always',
  bracketSpacing: true,
  jsxSingleQuote: true,
  printWidth: 120,

  overrides: [
    {
      files: '*.{ts,tsx}',
      options: {
        parser: 'typescript',
      },
    },
    {
      files: '*.js',
      options: {
        parser: 'babel',
      },
    },
    {
      files: '*.{yaml,yml}',
      options: {
        parser: 'yaml',
      },
    },
  ],

}

/** @type {import('@hey-api/openapi-ts').UserConfig} */

module.exports = {
  client: '@hey-api/client-fetch',
  input: 'http://localhost:3000/api-document-json',
  output: {
    format: 'prettier',
    path: './src/client',
  },
  types: {
    dates: 'types+transform',
    enums: 'javascript',
  },
}

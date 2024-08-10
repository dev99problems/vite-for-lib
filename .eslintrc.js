/* eslint-env node */
module.exports = {
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unicorn', 'no-only-tests', 'import'],
  rules: {
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: "Don't declare enums",
      },
    ],
    'import/no-duplicates': ['error'],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/no-unsafe-assignment': 0,
    '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      {
        fixStyle: 'separate-type-imports',
      },
    ],
    'no-only-tests/no-only-tests': 'error',
    'unicorn/filename-case': [
      'error',
      {
        case: 'kebabCase',
      },
    ],
    'unicorn/no-empty-file': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-string-slice': 'error',
  },
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
  },
  root: true,
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    quotes: [2, 'single'],
    indent: ['error', 2],
    'react/prop-types': ['off'],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-expression'],
      },
    ],
  },
}

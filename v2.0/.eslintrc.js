const eslint = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'prettier',
    'react',
    '@typescript-eslint',
    'jest',
    'import',
    'jsx-a11y',
    'simple-import-sort',
  ],
  rules: {
    'react/react-in-jsx-scope': 0,
    // note we must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    // note we must disable the base rule as it can report incorrect errors
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    'react/require-default-props': 0,
    'prettier/prettier': 'error',
    'react/prop-types': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    'jest/expect-expect': 0,
    'jest/valid-expect': 0,
    'import/prefer-default-export': 0,
    'react/display-name': 0,
    'cypress/no-unnecessary-waiting': 0,
    'jsx-a11y/alt-text': [
      2,
      {
        img: ['ExpertImage'],
      },
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: ['arrow-function', 'function-declaration'],
      },
    ],
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'simple-import-sort/imports': [
      1,
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Packages. `react` related packages come first.
          // Absolute imports and other imports such as Vue-style `@/foo`.
          ['^react', '^@?\\w'],
          // Internal packages.
          // Anything that does not start with a dot.
          ['^(assets)(/.*|$)', '^[^.]'],
          ['^\\.'],
        ],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
    jest: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {},
    },
  },
  overrides: [
    {
      files: ['**/*.stories.*'],
      rules: {
        'import/no-anonymous-default-export': 'off',
      },
    },
  ],
}

module.exports = eslint

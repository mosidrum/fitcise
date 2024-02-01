module.exports = {
  env: {
    browser: true,
    es2022: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:sonarjs/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks', 'sonarjs'],
  rules: {
    quotes: ['error', 'single'],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/comma-dangle': ['error', 'never'],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    'unicorn/filename-case': 'off',
    'unicorn/prevent-abbreviations': 'off',
    'react/require-default-props': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-console': 'warn',
    'react/button-has-type': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'react/no-array-index-key': 'off',
    'implicit-arrow-linebreak': 'off',
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/prop-types': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'no-underscore-dangle': 'off',
    'linebreak-style': 'off',
    'no-confusing-arrow': 'off',
    'react/jsx-curly-newline': 'off',
    'unicorn/expiring-todo-comments': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-array-for-each': 'off',
    '@typescript-eslint/indent': 'off',
    'unicorn/catch-error-name': 'off',
    'operator-linebreak': 'off',
    'no-nested-ternary': 'off'
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.scss']
      }
    }
  }
};


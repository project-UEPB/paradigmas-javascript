module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-hooks'
  ],
  rules: {
    'react/jsx-filename-extension': 0,
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'no-nested-ternary': 'off',
    'linebreak-style': 'off',
    'array-callback-return': 'off',
    'no-plusplus': 'off',
    'arrow-body-style': 'off',
    'no-continue': 'off',
    'no-await-in-loop': 'off',
    'react/no-array-index-key': 'off',
    'no-restricted-globals': 'off',
  },
};
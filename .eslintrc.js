module.exports = {
  parser: 'babel-eslint',
  plugins: [
    'flowtype',
    'react'
  ],
  env: {
    es6: true,
    browser: true,
  },
  extends: 'airbnb',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    ['react/jsx-filename-extension']: [1, { "extensions": [".js", ".jsx"] }],
  }
};

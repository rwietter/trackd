module.exports = {
  ...require('config/eslint-next'),
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['*.ts', '*.tsx'],
    },
    'import/resolver': {
      node: {
        paths: ['lib'],
        extensions: ['.ts', '.tsx'],
      },
    },
  },
};

module.exports = {
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
    'react/jsx-indent': ['error', 2],
    'react/jsx-max-props-per-line': [1, { maximum: 2 }],
    'sonarjs/no-duplicate-string': 'off',
    'react/jsx-indent-props': ['error', 2],
    'react/no-unused-prop-types': 'off',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': 'off',
    'react/function-component-definition': 'off',
    'no-plusplus': 'off',
    'no-unused-vars': 'off',
    'react/require-default-props': 'off',
  },
};

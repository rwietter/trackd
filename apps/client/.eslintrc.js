module.exports = {
  ...require('config/eslint-next'),
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    "plugin:react-hooks/recommended",
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    "prettier",
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'turbo'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: [`${__dirname}/tsconfig.json`],
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'eslint-plugin-import-helpers',
    'react-hooks',
    'jsx-a11y',
    'sonarjs',
    'prettier',
    'import',
  ],
  rules: {
    // ------- favorite rules -------
    "react/jsx-indent": ["error", 2],
    "react/jsx-max-props-per-line": [1, { maximum: 2 }],
    "sonarjs/no-duplicate-string": "off",
    "react/jsx-indent-props": ["error", 2],
    "react/no-unused-prop-types": "off",
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    'newline-per-chained-call': ["error", { ignoreChainWithDepth: 3 }],
    'no-console': 'off',
    "indent": ["error", 2, { "MemberExpression": 0, "ignoredNodes": ["JSXElement", "JSXElement *"] }],
    "no-cond-assign": "error",
    "no-constant-condition": "error",
    "no-unreachable": "error",
    "no-unused-expressions": "error",
    "no-constant-binary-expression": "error",
    "no-sequences": "error",
    // ------------------------------
    "react/jsx-filename-extension": [1, { "extensions": [".ts", ".tsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": "off",
    "react/function-component-definition": "off",
    "no-plusplus": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    'object-curly-newline': [
      'error',
      {
        consistent: true,
      },
    ],
    complexity: [
      'warn',
      {
        max: 6,
      },
    ],
    eqeqeq: ['error', 'smart'],
    'no-else-return': ['error', { allowElseIf: false }],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        parser: 'flow',
      },
    ],
    'react/jsx-filename-extension': [
      'warn',
      {
        extensions: ['.jsx', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          '/^next/',
          '/^antd/',
          '/^@types/',
          '/^/@services/',
          '/^nookies/',
          '/^@module/',
          'module',
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
    "@typescript-eslint/no-explicit-any": "off",
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

module.exports = {
  ...require('config/eslint-next'),
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    "plugin:react-hooks/recommended",
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended',
    "prettier"
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
    'eslint-plugin-import-helpers',
    'react-hooks',
    'jsx-a11y',
    'sonarjs',
    'prettier'
  ],
  rules: {
    // ------- favorite rules -------
    "react/jsx-indent": ["error", 2],
    "react/jsx-max-props-per-line": [1, { maximum: 1  }],
    "react/jsx-indent-props": ["error", 2],
    "react/jsx-closing-bracket-location": ["error", "tag-aligned"],
    'newline-per-chained-call': ["error", { ignoreChainWithDepth: 1 }],
    "indent": ["error", 2, { "MemberExpression": 0, "ignoredNodes": ["JSXElement", "JSXElement *"] }],
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
        max: 3,
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
          '/^nookies/',
          '/^@module/',
          'module',
          `/^
          (assert
          |async_hooks
          |buffer
          |child_process
          |cluster
          |console
          |constants
          |crypto
          |dgram
          |dns
          |domain
          |events
          |fs
          |http
          |http2
          |https
          |inspector
          |module
          |net
          |os
          |path
          |perf_hooks
          |process
          |punycode
          |querystring
          |readline
          |repl
          |stream
          |string_decoder
          |timers
          |tls
          |trace_events
          |tty
          |url
          |util
          |v8
          |vm
          |zli
          )/`,
        ],
        alphabetize: {
          order: 'asc',
          ignoreCase: true,
        },
      },
    ],
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

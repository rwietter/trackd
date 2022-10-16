module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb-typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier',
    'plugin:react/recommended',
    "plugin:react-hooks/recommended",
    'plugin:jsx-a11y/recommended',
    'plugin:sonarjs/recommended',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'import',
    '@typescript-eslint',
    'react',
    'eslint-plugin-import-helpers',
    'react-hooks',
    'jsx-a11y',
    'sonarjs',
    'prettier'
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        project: ['tsconfig.json'],
      },
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
  },
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
    'no-console': 2,
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
      },
    ],
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
}
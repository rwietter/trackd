module.exports = {
	...require('config/eslint-server'),
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		root: true,
		tsconfigRootDir: __dirname,
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: [
		'@typescript-eslint',
	],
	rules: {
		"import/extensions": [
			"error",
			"ignorePackages",
			{
				"js": "never",
				"jsx": "never",
				"ts": "never",
				"tsx": "never"
			}
		],
		"import/prefer-default-export": "off",
	},
	settings: {
		'import/parsers': {
			'@typescript-eslint/parser': ['*.ts', '*.test.ts'],
		},
		'import/resolver': {
			node: {
				paths: ['lib'],
				extensions: ['.ts'],
			},
		},
	},
};

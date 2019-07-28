module.exports = {
	env: {
		browser: true,
		es6: true,
		node: true,
	},
	extends: ['standard', 'plugin:prettier/recommended'],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaVersion: 2019,
		sourceType: 'module',
	},
	rules: {
		'prettier/prettier': 'warn',
		'func-names': ['error', 'as-needed'],
		'no-console': 'warn',
		'eqeqeq': 'off',
	},
};

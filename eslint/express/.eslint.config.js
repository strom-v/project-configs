import js from '@eslint/js';
import globals from 'globals';
import eslintPluginImport from 'eslint-plugin-import';
export default [
  js.configs.recommended,
  {
    plugins: {
      import: eslintPluginImport,
    },
    languageOptions: {
      globals: {
        ...globals.node,
        process: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      'no-console': 'warn',
      semi: 'off',
      quotes: 'off',
      'comma-dangle': 'off',
      'arrow-parens': 'off',
      'import/extensions': ['error', 'ignorePackages'],
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'always',
        },
      ],
    },
    ignores: ['node_modules/', 'dist/', 'build/', 'coverage/', '*.config.js', '**/uploads/**', '**/test/**', '**/.git/**'],
  },
];

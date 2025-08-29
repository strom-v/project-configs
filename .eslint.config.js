import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';
export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
    },
    rules: {
      ...ts.configs.recommended.rules,
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
  },
  {
    files: ['**/*.js', '**/*.jsx'],
    rules: {
      'no-unused-vars': 'error',
      'no-console': 'warn',
      'prefer-const': 'error',
    },
  },
];

// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';
import ember from 'eslint-plugin-ember';
import qunit from 'eslint-plugin-qunit';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  // Ignore built & vendor artifacts
  {
    ignores: [
      'dist/**',
      'tmp/**',
      'coverage/**',
      'vendor/**',
      'types/**', // generated or legacy .d.ts you don't want to lint
      'concat-stats-for/**',
      // node_modules is ignored by default
    ],
  },

  // Base JS
  {
    ...js.configs.recommended,
    files: ['**/*.js', '**/*.mjs', '**/*.cjs'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      ember,
      qunit,
    },
    rules: {
      ...ember.configs.recommended.rules,
      ...qunit.configs.recommended.rules,
    },
  },

  // TypeScript (addon components etc.)
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.d.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // No need for project: tsconfig.json here; faster & sufficient for linting
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      ember,
      qunit,
    },
    rules: {
      // Use NON type-aware recommended rules:
      ...tsPlugin.configs.recommended.rules,

      // Relax a few noisy TS rules for .d.ts / Ember patterns:
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/ban-ts-comment': 'off',

      // Keep Ember/QUnit goodness for TS files too:
      ...ember.configs.recommended.rules,
      ...qunit.configs.recommended.rules,
    },
  },
];

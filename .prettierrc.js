'use strict';

module.exports = {
  plugins: ['prettier-plugin-ember-template-tag'],
  overrides: [
    {
      files: '*.{js,gjs,ts,gts,mjs,mts,cjs,cts}',
      options: {
        singleQuote: true,
        templateSingleQuote: false,
        trailingComma: 'es5',
        printWidth: 100,
        semi: true,
        bracketSpacing: true,
        endOfLine: 'lf',
        useTabs: false,
        tabWidth: 2,
        arrowParens: 'always',
      },
    },
  ],
};

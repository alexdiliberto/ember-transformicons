module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember',
    'prettier',
    'qunit'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    'plugin:qunit/recommended',
    '@alexdiliberto',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    'no-debugger': 0,
    'indent': 0, // HACK: Removes error `Cannot read property 'range' of null`
    'ember/classic-decorator-hooks': 'error',
    'ember/classic-decorator-no-classic-methods': 'error',
    'ember/no-jquery': 'error'
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js'
      ],
      excludedFiles: [
        'addon/**',
        'addon-test-support/**',
        'app/**',
        'tests/dummy/app/**'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      })
    }
  ]
};

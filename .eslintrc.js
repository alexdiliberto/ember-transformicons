module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended',
    '@alexdiliberto'
  ],
  env: {
    browser: true
  },
  rules: {
    'no-debugger': 0
  }
};

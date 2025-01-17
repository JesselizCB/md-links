module.exports = {
  env: {
    node: true,
    es6: true,
    jest: true
  },
  extends: [
    "airbnb-base"
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  plugins: ['jest'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'prefer-destructuring': 0,
    'import/extensions': 0,
    'import/prefer-default-export': 0,
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    'no-param-reassign': 0,
    'linebreak-style': 0
  },
};

module.exports = {
  'root': true,
  'env': {
    'node': true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  'rules': {
    'space-before-function-paren': ['error', { 'anonymous': 'always', 'named': 'never', 'asyncArrow': 'always' }],
    'no-console': process.env.NODE_ENV !== 'production' ? 'off' : 'error',
    'object-curly-spacing': 'off',
    'no-trailing-spaces': 'off',
    'eol-last': 'off'
  },
  'parserOptions': {
    'parser': 'babel-eslint'
  }
}

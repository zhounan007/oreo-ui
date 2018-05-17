// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    'indent': 0,
    'semi': [0],
    // allow paren-less arrow functions
    'arrow-parens': 0,
    //函数定义时括号前面要不要有空格
    'space-before-function-paren': [0, "always"],
    // allow async-await
    'generator-star-spacing': 0,
    "no-unused-vars": 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}

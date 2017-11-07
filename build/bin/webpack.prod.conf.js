const path = require('path')
const webpack = require('webpack')
const vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

const config = {
  entry: resolve('src/index.js'),
  output: {
    filename: 'vue-oreo.js',
    path: resolve('dist')
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src')]
    }, {
      test: /\.(js|vue)$/,
      loader: 'eslint-loader',
      enforce: 'pre',
      include: [resolve('src')],
      options: {
        formatter: require('eslint-friendly-formatter')
      }
    }, {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    }]
  }
}

webpack(config, function (error, stats) {
  if (error) throw error

  console.log('Build complete')
})

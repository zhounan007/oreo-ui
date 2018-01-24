const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')


function resolve(dir) {
  console.log(path.join(__dirname, '..', dir))
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  entry: resolve('src/index.js'),
  output: {
    filename: 'vue-oreo.js',
    path: resolve('lib'),
    library: 'vue-oreo',
    libraryTarget: 'umd'
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  }
})

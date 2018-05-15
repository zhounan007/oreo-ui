var path = require('path')
var utils = require('./utils')
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')


function resolve(dir) {
  console.log(path.join(__dirname, '..', dir))
  return path.join(__dirname, '..', dir)
}

module.exports = merge(baseWebpackConfig, {
  entry: {
    oreo: resolve('./src/index.js')
  },
  output: {
    filename: utils.assetsPath('index.js'),
    path: config.build.assetsRoot,
    library: 'oreo',
    libraryTarget: 'umd'
  },
  plugins: [
    new ExtractTextPlugin(utils.assetsPath('style.css'))
  ]
  // externals: {
  //   vue: {
  //     root: 'Vue',
  //     commonjs: 'vue',
  //     commonjs2: 'vue',
  //     amd: 'vue'
  //   }
  // }
})

var shell = require("shelljs")
var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = 'production'
}

var path = require('path')
var utils = require('./utils')
var ora = require('ora')
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
// var webpackModulesConfig = require('./webpack.modules.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

var assetsPath = path.join(config.build.assetsRoot, config.build.assetsSubDirectory)

shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)


buildPackage(webpackConfig, function () {
  webpackConfig.output.filename = utils.assetsPath('[name].min.js')

  webpackConfig.plugins = [
    new ExtractTextPlugin(utils.assetsPath('[name].min.css')),
    new OptimizeCSSPlugin({
      cssProcessorOptions: {
        safe: true
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
  buildPackage(webpackConfig, function () {
    console.log('build Complete...\n')
  }, 'building for compressed files...')
})





function buildPackage(config, callback, spinnerText) {
  var spinner = ora(spinnerText || 'building for uncompressed files...')
  spinner.start()

  webpack(config, function (err, stats) {
    spinner.stop()
    if (err) {
      throw err
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n')
    callback && callback()
  })
}

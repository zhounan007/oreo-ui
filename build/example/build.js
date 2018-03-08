process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../../config')
var webpackConfig = require('./webpack.example.conf')

var spinner = ora('building for example production...')
spinner.start()

rm(path.join(config.demoBuild.assetsRoot, config.demoBuild.assetsSubDirectory), err => {
  if (err) {
    throw err
  }
  webpack(webpackConfig, function (error, stats) {
    spinner.stop()
    if (error) {
      throw error
    }
    process.stdout.write(stats.toString({
      colors: true,
      modules: false,
      children: false,
      chunks: false,
      chunkModules: false
    }) + '\n\n')
    console.log(chalk.cyan(' Example build complete. \n'))
  })
})


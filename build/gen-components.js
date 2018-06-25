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

var _config = merge(baseWebpackConfig, {
    entry: {
        'button/index': resolve('./components/button/index.js')
    },
    output: {
        path: config.build.assetsRoot,
        library: 'oreo',
        libraryTarget: 'umd'
    },
    externals: {
        vue: 'Vue'
    }
})


webpack(_config, function (err, stats) {
    // spinner.stop()
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    // console.log(chalk.cyan('  Build complete.\n'))
    // console.log(chalk.yellow(
    //     '  Tip: built files are meant to be served over an HTTP server.\n' +
    //     '  Opening index.html over file:// won\'t work.\n'
    // ))
})
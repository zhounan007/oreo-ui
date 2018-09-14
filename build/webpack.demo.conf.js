const path = require('path')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = Object.assign({}, baseWebpackConfig, {
    entry: {
        main: './example/main.js',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.resolve(__dirname, '../example/dist'),
        // publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].[chunkhash].js'
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendor.bundle.js'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../example/dist/index.html'),
            template: path.join(__dirname, '../example/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
})

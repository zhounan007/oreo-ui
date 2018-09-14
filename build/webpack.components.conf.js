const path = require('path')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const Components = require('../components.json')
const config = require('./config')
const { VueLoaderPlugin } = require('vue-loader');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')


function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = Object.assign({}, baseWebpackConfig, {
    entry: Components,
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[id].js',
        libraryTarget: 'commonjs2'
    },
    externals: config.externals,
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: config.alias,
        modules: ['node_modules']
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
})

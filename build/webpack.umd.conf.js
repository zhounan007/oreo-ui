const path = require('path')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const { VueLoaderPlugin } = require('vue-loader');
const ProgressBarPlugin = require('progress-bar-webpack-plugin')


module.exports = Object.assign({}, baseWebpackConfig, {
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/',
        filename: 'index.js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        library: 'OREO',
        umdNamedDefine: true
    },
    externals: {
        vue: {
            root: 'Vue',
            commonjs: 'vue',
            commonjs2: 'vue',
            amd: 'vue'
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new ProgressBarPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            output: {
                comments: false
            },
            sourceMap: false
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
})

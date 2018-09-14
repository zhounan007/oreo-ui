const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader');

const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const config = require('./config')
function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: {
        app: [path.resolve(__dirname, '../components/index.js')]
    },
    output: {
        path: path.resolve(__dirname, '../lib'),
        publicPath: '/',
        filename: 'index.js',
        chunkFilename: '[id].js',
        libraryTarget: 'umd',
        library: 'OREO',
        umdNamedDefine: true
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: config.alias
    },
    module: {
        rules: [{
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            enforce: 'pre',
            include: [resolve('src'), resolve('components'),],
            options: {
                formatter: require('eslint-friendly-formatter')
            }
        },
        {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                preserveWhitespace: false
            }
        },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [resolve('src'), resolve('components'), resolve('example')]
        },
        {
            test: /\.less$/,
            use: [
                'style-loader',
                'css-loader',
                'less-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader', 'postcss-loader'
            ]
        },
        {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, // |svg
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: path.posix.join('static', 'img/[hash:7].[ext]')
            }
        },
        {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                name: path.posix.join('static', 'fonts/[name].[hash:7].[ext]')
            }
        }
        ]
    }
}
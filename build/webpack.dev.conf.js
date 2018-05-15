/*
 * 
 * @Author: zhounan 
 * @Date: 2017-11-07 15:25:53 
 * @Last Modified by: zhounan
 * @Last Modified time: 2017-11-07 19:10:47
 */

const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

module.exports = merge(baseWebpackConfig, {
  entry: {
    main: './example/main.js',
    vendors: ['vue', 'vue-router']
  },
  output: {
    path: path.join(__dirname, '../example/dist'),
    publicPath: '',
    filename: '[name].js',
    chunkFilename: '[name].[chunkhash].js'
  },
  module: {
    rules: [{
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
        'css-loader'
      ]
    }]
  },
  plugins: [
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

/*
 * 
 * webpack 基础配置
 * 
 * 
 * @Author: zhounan 
 * @Date: 2017-11-07 14:21:04 
 * @Last Modified by: zhounan
 * @Last Modified time: 2018-01-24 14:17:09
 */

var path = require('path')
// var utils = require('./utils')
// var config = require('../config')
// var vueLoaderConfig = require('./vue-loader.conf')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json', '.less'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      '@c': resolve('components'),
      '@e': resolve('example'),
      'OreoUI': resolve('components/theme')
    }
  },
  module: {
    rules: [{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('components'), resolve('example')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['vue-style-loader', 'css-loader'],
            less: ['vue-style-loader', 'css-loader', 'less-loader']
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('components'), resolve('example'), resolve('node_modules/webpack-dev-server/')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, // |svg
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('img/[hash:7].[ext]')
        },
        exclude: [resolve('components/icon/assets')]

      },
      {
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('components/icon/assets')]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000
          // name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      }
    ]
  }
}

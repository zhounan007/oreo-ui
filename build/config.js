var path = require('path')
var fs = require('fs')
var nodeExternals = require('webpack-node-externals')

var Components = require('../components.json')

var utilsList = fs.readdirSync(path.resolve(__dirname, '../components/utils'))
var mixinsList = fs.readdirSync(path.resolve(__dirname, '../components/mixins'))

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}
var externals = {}

Object.keys(Components).forEach((cp) => {
    externals[`oreo-ui/components/${cp}`] = `oreo-ui/lib/${cp}`
})

utilsList.forEach((file) => {
    file = path.basename(file, '.js')
    externals[`oreo-ui/components/utils/${file}`] = `oreo-ui/lib/utils/${file}`
})
mixinsList.forEach((file) => {
    file = path.basename(file, '.js')
    externals[`oreo-ui/components/mixins/${file}`] = `oreo-ui/lib/mixins/${file}`
})
// locale
externals[`oreo-ui/components/locale/`] = `oreo-ui/lib/locale`

externals = [Object.assign({
    vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    '@c': resolve('components'),
    '@e': resolve('example'),
    'OreoUI': resolve('components/theme-oreo'),
    'oreo-ui': resolve('')
}
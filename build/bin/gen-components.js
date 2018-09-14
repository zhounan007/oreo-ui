/*
 * @Author: zhounan 
 * @Date: 2018-09-12 18:38:16 
 * @Last Modified by: zhounan
 * @Last Modified time: 2018-09-13 09:41:31
 */
var path = require('path')
var fs = require('fs')

var dirs = fs.readdirSync(path.resolve(__dirname, '../../components'))
var excludes = ['index.js', 'theme-oreo', 'mixins', 'locale', 'utils']

var components = dirs.filter(dirname => {
    return excludes.indexOf(dirname) === -1
})

var list = {}
components.forEach(cp => {
    list[cp] = `./components/${cp}/index.js`
})

fs.writeFileSync(path.resolve(__dirname, '../../components.json'), JSON.stringify(list), 'utf-8')
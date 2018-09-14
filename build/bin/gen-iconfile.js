/*
 * @Author: zhounan 
 * @Date: 2018-09-12 16:51:07 
 * @Last Modified by: zhounan
 * @Last Modified time: 2018-09-12 16:51:51
 * 生成icons.json
 */

var postcss = require('postcss');
var fs = require('fs')
var path = require('path')

var fontFile = fs.readFileSync(path.resolve(__dirname, '../../components/theme-oreo/src/oreo-icons.less'), 'utf-8')
var nodes = postcss.parse(fontFile).nodes

var classList = []

nodes.forEach(node => {
    var selector = node.selector || ''
    var reg = new RegExp(/\.oreo-icon-([^:]+):before/)
    var arr = selector.match(reg)

    if (arr && arr[1]) {
        classList.push(arr[1])
    }
})

fs.writeFileSync(path.resolve(__dirname, '../../example/icons.json'), JSON.stringify(classList), 'utf-8')
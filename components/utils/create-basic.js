/*
 * @Author: zhounan 
 * @Date: 2018-08-01 19:58:44 
 * @Last Modified by: zhounan
 * @Last Modified time: 2018-08-10 15:38:22
 * 基础组件工具
 */
// 国际化
import Locale from 'oreo-ui/components/mixins/locale'
// Bem 样式
import Bem from 'oreo-ui/components/mixins/bem'

function install(Vue) {
    Vue.component(this.name, this)
}

function createBasic(sfc) {
    // sfc._name = 'oreo-' + sfc.name
    sfc.name = 'oreo-' + sfc.name

    sfc.install = sfc.install || install
    sfc.mixins = sfc.mixins || []

    sfc.mixins.push(Locale, Bem)
    return sfc
}

export default function (sfc) {
    sfc.components = Object.assign(sfc.components || {}, {

    })
    return createBasic(sfc)
}

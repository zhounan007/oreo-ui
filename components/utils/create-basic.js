/**
 * 创建基础组件
 */
import Locale from '../mixins/locale'

function install(Vue) {
    Vue.components(this.name, this)
}

function createBasic(sfc) {
    sfc.name = 'z-' + sfc.name
    sfc.install = sfc.install || install
    sfc.mixins = sfc.mixins || []

    sfc.mixins.push(Locale)
    return sfc
}

export default function (sfc) {
    sfc.components = Object.assign(sfc.components || {}, {

    })
    return createBasic(sfc)
}

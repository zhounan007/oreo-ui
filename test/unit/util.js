import Vue from 'vue'
import OreoUI from 'oreo-ui/components/index.js'

Vue.use(OreoUI)

let id = 0
const createEl = function () {
    const el = document.createElement('div')
    el.id = 'oreo_' + ++id
    document.body.appendChild(el)

    return el
}

/**
 * 
 * @param {Object} vm 
 */
exports.destroyVm = (vm) => {
    vm.$destroy && vm.$destroy()

    vm.$el && vm.$el.parentNode && vm.$el.parentNode.removeChild(vm.$el)
}

exports.createVue = (Cmp, mounted = false) => {
    if (Object.prototype.toString.call(Cmp) === '[object String]') {
        Cmp = { template: Cmp }
    }
    return new Vue(Cmp).$mount(mounted === false ? null : createEl())
}

exports.createTest = (Cmp, propsData = {}, mounted = false) => {
    if (propsData === true || propsData === false) {
        mounted = propsData
        propsData = {}
    }
    const el = createEl()
    const Ct = Vue.extend(Cmp)
    return new Ct({ propsData }).$mount(mounted === false ? null : el)
}

exports.triggerEvent = (el, name, ...opts) => {
    let eventName

    eventName = 'HTMLEvents'
    const evt = document.createEvent(eventName)

    evt.initEvent(name, ...opts)
    el.dispatchEvent ? el.dispatchEvent(evt) : el.fireEvent('on' + name, evt)

    return el
}

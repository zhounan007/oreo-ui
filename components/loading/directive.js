import Vue from 'vue'
import loadingVue from './Loading.vue'
import { addClass, removeClass, getStyle } from 'oreo-ui/components/utils/dom'

const LoadingConstructor = Vue.extend(loadingVue)

const loadingDirective = {}
loadingDirective.install = Vue => {
    if (Vue.prototype.$isServer) return

    const insertDom = (parent, el, binding) => {
        if (!el.domVisible && getStyle(el, 'display') !== 'none' && getStyle(el, 'visibility') !== 'hidden') {
            if (el.originalPosition !== 'absolute' && el.originalPosition !== 'fixed') {
                addClass(parent, 'oreo-is-relative')
            }
            if (binding.modifiers.fullscreen) {
                addClass(parent, 'oreo-overflow-hidden')
            }
            el.domVisible = true

            parent.appendChild(el.mask)
            Vue.nextTick(() => {
                el.instance.visible = true
            })
            el.domInserted = true
        }
    }

    const toggleLoading = (el, binding) => {
        if (binding.value) {
            Vue.nextTick(() => {
                if (binding.modifiers.fullscreen) {
                    el.originalPosition = getStyle(document.body, 'position')
                    el.originalOverflow = getStyle(document.body, 'overflow')

                    insertDom(document.body, el, binding)
                } else {
                    if (binding.modifiers.body) {
                        el.originalPosition = getStyle(document.body, 'position')
                        insertDom(document.body, el, binding)
                    } else {
                        el.originalPosition = getStyle(el, 'position')
                        insertDom(el, el, binding)
                    }
                }
            })
        } else {
            const mask = el.instance
            mask.$on('after-leave', () => {
                const target = mask.fullscreen || mask.body ? document.body : mask.target
                removeClass(target, 'oreo-is-relative')
                removeClass(target, 'oreo-overflow-hidden')

                if (mask.$el && mask.$el.parentNode) {
                    mask.$el.parentNode.removeChild(mask.$el)
                }
                mask.$destroy()
            })

            mask.visible = false
        }
    }
    Vue.directive('loading', {
        inserted() {
            console.log('inserted...')
        },
        bind(el, binding, vnode) {
            const text = el.getAttribute('oreo-loading-text')
            const background = el.getAttribute('oreo-loading-background')
            const customClass = el.getAttribute('oreo-loading-custom-class')

            const mask = new LoadingConstructor({
                el: document.createElement('div')
            })
            Object.assign(mask, { text, background, customClass, fullscreen: !!binding.modifiers.fullscreen })

            el.instance = mask
            el.mask = mask.$el

            binding.value && toggleLoading(el, binding)
        },
        update(el, binding) {
            el.instance.text = el.getAttribute('oreo-loading-text')
            // el.instance.setText(el.getAttribute('oreo-loading-text'))
            if (binding.oldValue !== binding.value) {
                toggleLoading(el, binding)
            }
        },
        unbind(el, binding) {
            if (el.domInserted) {
                el.mask && el.mask.parentNode && el.mask.parentNode.removeChild(el.mask)

                toggleLoading(el, { value: false, modifiers: binding.modifiers })
            }
        }
    })
}

export default loadingDirective

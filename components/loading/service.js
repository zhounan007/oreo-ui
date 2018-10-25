import Vue from 'vue'
import loadingVue from './Loading.vue'
import { addClass, removeClass, getStyle } from 'oreo-ui/components/utils/dom'

const LoadingConstructor = Vue.extend(loadingVue)

const defaults = {
    text: '',
    fullscreen: true,
    customClass: {}
}
let fullscreenLoading

LoadingConstructor.prototype.originalPosition = ''
LoadingConstructor.prototype.originalOverflow = ''

LoadingConstructor.prototype.close = function () {
    if (this.fullscreen) {
        fullscreenLoading = undefined
    }

    this.$on('after-leave', () => {
        const target = this.fullscreen || this.body ? document.body : this.target
        removeClass(target, 'oreo-is-relative')
        removeClass(target, 'oreo-overflow-hidden')

        if (this.$el && this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
        this.$destroy()
    })

    this.visible = false
}

const addStyle = (options, parent, instance) => {
    if (options.fullscreen) {
        instance.originalPosition = getStyle(document.body, 'position')
        instance.originalOverflow = getStyle(document.body, 'overflow')
    } else if (options.body) {
        instance.originalPosition = getStyle(document.body, 'position')
    } else {
        instance.originalPosition = getStyle(parent, 'position')
    }
}

const Loading = (options = {}) => {
    if (Vue.prototype.$isServer) return

    options = Object.assign({}, defaults, options)

    if (typeof options.target === 'string') {
        options.target = document.querySelector(options.target)
    }
    options.target = options.target || document.body
    if (options.target !== document.body) {
        options.fullscreen = false
    } else {
        options.body = true
    }

    if (options.fullscreen && fullscreenLoading) {
        return fullscreenLoading
    }

    let parent = options.body ? document.body : options.target
    let instance = new LoadingConstructor({
        el: document.createElement('div')
    })
    Object.assign(instance, options)
    addStyle(options, parent, instance)

    if (instance.originalPosition !== 'absolute' && instance.originalPosition !== 'fixed') {
        addClass(parent, 'oreo-is-relative')
    }
    if (options.fullscreen) {
        addClass(parent, 'oreo-overflow-hidden')
    }

    parent.appendChild(instance.$el)

    Vue.nextTick(() => {
        instance.visible = true
    })
    if (options.fullscreen) {
        fullscreenLoading = instance
    }
    return instance
}

export default Loading

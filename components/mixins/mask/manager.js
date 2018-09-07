import Vue from 'vue'
import ZMask from './Mask'
import context from './context'

const defaultConfig = {
    className: '',
    customStyle: {}
}

export default {
    open(vm, config) {
        if (!context.stack.some(item => item.vm._maskId === vm._maskId)) {
            const el = vm.$el
            const targetNode = el && el.parentNode && el.parentNode.nodeType !== 11 ? el.parentNode : document.body
            context.stack.push({ vm, config, targetNode })
            this.update()
        }
    },
    close(id) {
        const { stack } = context
        if (stack.length) {
            if (context.top.vm._maskId === id) {
                stack.pop()
                this.update()
            } else {
                context.stack = stack.filter(item => item.vm._maskId !== id)
            }
        }
    },
    update() {
        let { mask } = context

        if (!mask) {
            mask = new (Vue.extend(ZMask))({
                el: document.createElement('div')
            })
            mask.$on('click', this.onClick)
            context.mask = mask
        }

        if (mask.$el.parentNode) {
            mask.visible = false
        }
        if (context.top) {
            const { targetNode, config } = context.top

            targetNode.appendChild(mask.$el)
            Object.assign(mask, {
                ...defaultConfig,
                ...context,
                visible: true
            })
        }
    },
    onClick() {
        if (context.top) {
            const { vm } = context.top
            vm.$emit('click-overlay')
            vm.closeOverlayByClick && vm.$emit('input', false)
        }
    }
}

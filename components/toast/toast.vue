<template>
    <div :class="classNames">
        <div class="oreo-toast-text" :class="modeClassName">
            <div class="oreo-toast-icon" v-if="type" :class="typeClassNames">
            </div>
            <div class="oreo-toast-msg">
                {{message}}
            </div>
        </div>
    </div>
</template>
<script>

import { ZIcon } from '@c/icon'
const prefixCls = 'oreo-toast'
export default {
    name: 'z-toast',
    components: {
        ZIcon
    },
    data() {
        return {
            visible: false,
            mask: true,
            message: '',
            type: '', // success failure loading
            duration: 2000 * 1000,
            onClose: null,
            closed: false,
            timer: null,
            mode: 'vertical'
        }
    },
    computed: {
        classNames() {
            return {
                'oreo-toast': true,
                'oreo-toast-mask': this.mask,
                'oreo-toast-nomask': !this.mask
            }
        },
        modeClassName() {
            return this.mode === 'vertical' ? `${prefixCls}-text-vertical` : `${prefixCls}-text-horizontal`
        },
        typeClassNames() {
            return {
                [`${prefixCls}-${this.type}`]: this.type && this.type !== 'loading',
                'oreo-loading': this.type === 'loading',
                'oreo-loading-light': this.type === 'loading'

            }
        }
    },
    watch: {
        closed(newVal) {
            if (newVal) {
                this.visible = false
                this.destroyElement()
            }
        }
    },
    mounted() {
        this.startTimer()
    },
    methods: {
        destroyElement() {
            this.$destroy()
            this.$el.parentNode.removeChild(this.$el)
        },
        close() {
            this.closed = true
            if (typeof this.onClose === 'function') {
                this.onClose(this)
            }
        },
        startTimer() {
            if (this.duration > 0) {
                this.timer = setTimeout(() => {
                    if (!this.closed) {
                        this.close()
                    }
                }, this.duration)
            }
        }
    }

}
</script>
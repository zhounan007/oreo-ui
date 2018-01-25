<template>
    <z-transition name="oreo-modal-fade" @after-leave="handlerAfterLeave">
        <div :class="classNames" v-show="visible">
            <div class="oreo-toast-text" :class="modeClassName">
                <div class="oreo-toast-icon oreo-loading oreo-loading-light">
                </div>
                <div class="oreo-toast-msg" v-if="text">
                    {{text}}
                </div>
            </div>
        </div>
    </z-transition>
</template>
<script>
import { ZTransition } from '../transition'
const prefixCls = 'oreo-toast'
export default {
    name: 'z-loading',
    components: {
        ZTransition
    },
    data() {
        return {
            visible: false,
            mask: true,
            mode: 'vertical',
            text: ''
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
        }
    },
    methods: {
        handlerAfterLeave() {
            this.$emit('after-leave')
        },
        setText(v) {
            this.text = v
        }
    }
}
</script>

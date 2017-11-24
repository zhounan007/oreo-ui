<template>
    <a href="javascript:;" :class="classNames" @click="handlerClick">
        <slot>
            <!-- <div class="oreo-toast-icon oreo-loading oreo-loading-dark oreo-loading-sm">
                </div>
                <span>
                    {{text}}
                </span> -->
        </slot>
    </a>
</template>
<script>
const prefixCls = 'oreo-button'

export default {
    name: 'z-button',
    components: {
    },
    props: {
        disabled: Boolean,
        inline: Boolean,
        small: Boolean,
        type: {
            type: String
            // validator(v) {
            //     return ['primary', 'success', 'error'].indexOf(v) >= 0
            // }
        }
    },
    computed: {
        classNames() {
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-small`]: this.small,
                [`${prefixCls}-inline`]: this.inline,
                [`${prefixCls}-${this.type}`]: this.type,
                [`${prefixCls}-disabled`]: this.disabled
            }
        }
    },
    methods: {
        handlerClick(e) {
            this.$el.blur()
            if (this.disabled) return
            this.$emit('click', e)
        }
    }
}
</script>

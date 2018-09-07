<template>
    <a href="javascript:;" :class="b([type,{small,disabled,inline}])" @click="handleClick">
        <slot>
            <!-- <div class="oreo-toast-icon oreo-loading oreo-loading-dark oreo-loading-sm">
                        </div>
                        <span>
                            {{text}}
                        </span> -->
            {{text}}
        </slot>
    </a>
</template>
<script>
import createBasic from '../utils/create-basic'
export default createBasic({
    name: 'button',
    props: {
        disabled: Boolean,
        inline: Boolean,
        small: Boolean,
        type: {
            type: String,
            default: ''
            // validator(v) {
            //     return ['primary', 'success', 'error'].indexOf(v) >= 0
            // }
        },
        text: String
    },
    methods: {
        handleClick(e) {
            this.$el.blur()
            if (this.disabled) return
            this.$emit('click', e)
        }
    }
})
</script>

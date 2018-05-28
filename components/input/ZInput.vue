<template>
    <div :class="classNames"> 
        <div class="oreo-input-wrapper">
            <div :class="labelClass" v-if="label">{{label}}</div>
            <div  :class="controlClass">
                <input :type="type" :placeholder="placeholder" @input="handleInput($event)" :value="value" :disabled="disabled" :class="textRightClass">
            </div>
        </div>
    </div>
</template>
<script>
const prefixCls = 'oreo-input'
export default {
    name: 'z-input',
    props: {
        placeholder: String,
        label: String,
        type: {
            type: String,
            validator(v) {
                return ['text', 'password'].indexOf(v) >= 0
            },
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [Number, String]
        },
        rightAlign: Boolean
    },
    computed: {
        classNames() {
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-disabled`]: this.disabled
            }
        },
        labelClass() {
            return {
                [`${prefixCls}-label`]: true
            }
        },
        controlClass() {
            return {
                [`${prefixCls}-control`]: true
            }
        },
        textRightClass() {
            return {
                [`${prefixCls}-right`]: this.rightAlign
            }
        }

    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>
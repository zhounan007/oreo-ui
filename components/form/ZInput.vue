<template>
    <div class="oreo-form-group">
        <div :class="labelClassName" v-if="hideLabel">{{label}}</div>
        <div :class="controlClassName">
            <input :class="alignClass" :type="type" :placeholder="placeholder" @input="input($event)" :value="value" :disabled="disabled">
        </div>
    </div>
</template>
<script>
import { ZList, ZListItem } from '../list/index'
const prefixCls = 'oreo-input'
export default {
    name: 'z-input',
    components: {
        ZList,
        ZListItem
    },
    props: {
        header: {
            type: String
        },
        label: {
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
        placeholder: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [String, Number]
        },
        rightAlign: Boolean
    },
    computed: {
        hideLabel() {
            return this.label !== void 0
        },
        labelClassName() {
            return `${prefixCls}-label`
        },
        controlClassName() {
            return `${prefixCls}-control`
        },
        disabledClass() {
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-disabled`]: this.disabled
            }
        },
        alignClass() {
            return {
                [`${prefixCls}-right`]: this.rightAlign
            }
        }
    },
    methods: {
        input(event) {
            this.$emit('input', event.target.value)
        }
    }
}
</script>
<style lang="less" scoped>
// .oreo-form-group {
//   width: 100%;
//   display: flex;
//   height: 0.9rem;
//   line-height: 0.9rem;
// }
</style>


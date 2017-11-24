<template>
    <z-list>
        <z-list-item :class="disabledClass">
            <div :class="labelClassName" v-if="hideLabel">{{label}}</div>
            <div :class="controlClassName">
                <input :class="alignClass" :type="type" :placeholder="placeholder" @input="input($event)" :value="value" :disabled="disabled">
            </div>
        </z-list-item>
    </z-list>
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

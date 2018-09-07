<template>
    <span :class="className">
        <template v-if="!triangle">{{text}}</template>
        <div :class="classNameDirection" v-if="triangle">
            <div>{{text}}</div>
        </div>
    </span>
</template>
<script>
const prefixCls = 'oreo-tag'
export default {
    name: 'z-tag',
    props: {
        type: {
            type: String,
            default: 'default'
        },
        size: {
            type: String,
            default: 'middle'
        },
        mark: {
            type: Boolean,
            default: false
        },
        triangle: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: 'left'
        },
        text: {
            type: String,
            required: true
        }
    },
    computed: {
        className() {
            if (this.mark) {
                return `${prefixCls}-semicircle`
            } else if (this.triangle) {
                return `${prefixCls}-triangle`
            } else {
                return {
                    [`${prefixCls}-${this.size}`]: true,
                    [`${prefixCls}-${this.type}`]: true
                }
            }
        },
        classNameDirection() {
            return `direction ${this.direction}`
        }
    }
}
</script>

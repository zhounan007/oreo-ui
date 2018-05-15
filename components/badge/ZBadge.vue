<template>
    <span :class="className">
        <slot></slot>
    </span>
</template>
<script>
const prefixCls = 'oreo-badge'
export default {
    name: 'z-badge',
    props: {
        type: {
            type: String,
            default: 'text'
        }
    },
    computed: {
        className() {
            return `${prefixCls}-${this.type}`
        }
    }
}
</script>

<template>
    <div :class="classNameType">
        <slot></slot>
    </div>
</template>
<script>
const prefixCls = 'oreo-tag'
export default {
    name: 'z-tag',
    props: {
        type: {
            type: String,
            default: 'default'
        }
    },
    computed: {
        classNameType() {
            return `${prefixCls}-${this.type}`
        }
    }
}
</script>
<style lang="less" scoped>

</style>

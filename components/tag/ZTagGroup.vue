<template>
    <div :class="className">
        <div :class="classNameSize">
            <slot></slot>
        </div>
    </div>
</template>
<script>
const prefixCls = 'oreo-tag'
export default {
    name: 'z-tag-group',
    props: {
        size: {
            type: String,
            default: 'middle'
        }
    },
    computed: {
        className() {
            return `${prefixCls}`
        },
        classNameSize() {
            return `${prefixCls}-${this.size}`
        }
    }
}
</script>

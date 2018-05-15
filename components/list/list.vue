<template>
    <div :class="classNames">
        <div class="oreo-list-header" v-if="header !== void 0">{{header}}</div>
        <div :class="listBody">
            <slot></slot>
        </div>
        <div class="oreo-list-footer" v-if="footer !== void 0">{{footer}}</div>
    </div>
</template>
<script>
const prefixCls = 'oreo-list'
export default {
    name: 'z-list',
    props: {
        header: String,
        line: {
            type: Boolean,
            default: true
        },
        footer: String,
        flex: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classNames() {
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-line`]: this.line
            }
        },
        listBody() {
            return {
                [`${prefixCls}-body`]: true,
                [`${prefixCls}-flex`]: this.flex
            }
        }
    }
}
</script>

<template>
  <div :class="classNames">
      <slot name="header">
          <div class="oreo-list-header" v-if="header !==void 0">{{header}}</div>
      </slot>
      <div class="oreo-list-body">
          <slot></slot>
      </div>
      <slot name="footer">
          <div class="oreo-list-footer" v-if="footer !==void 0">{{footer}}</div>
      </slot>
  </div>
</template>
<script>
const prefixCls = 'oreo-list'
export default {
    name: 'z-cell-group',
    props: {
        header: String,
        line: {
            type: Boolean,
            default: false
        },
        footer: String
    },
    computed: {
        classNames() {
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-line`]: this.line
            }
        }
    }
}
</script>

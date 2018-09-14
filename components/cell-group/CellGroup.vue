<template>
  <div :class="b({line})">
      <slot name="header">
          <div :class="b('header')" v-if="header !==void 0">{{header}}</div>
      </slot>
      <slot name="body">
          <div :class="b('body')">
            <slot></slot>
        </div>
      </slot>
      <slot name="footer">
          <div :class="b('footer')" v-if="footer !==void 0">{{footer}}</div>
      </slot>
  </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'cell-group',
    props: {
        header: String,
        line: {
            type: Boolean,
            default: false
        },
        footer: String
    }
})
</script>

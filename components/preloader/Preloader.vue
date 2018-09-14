<template>
  <div :class="b()" :style="style">
      <span :class="b([type,theme])" v-if="type==='circle'" >
        <svg  viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"/>
        </svg>
      </span>
      <span :class="b([type,theme])" v-if="type==='spinner'">
      </span>
  </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
const prefixCls = 'oreo-preloader'
export default createBasic({
  name: 'preloader',
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    size: String,
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    style() {
      return this.size ? {
        width: this.size,
        height: this.size
      } : {}
    },
    themeClassNames() {
      return [`${prefixCls}_${this.type}`, `${prefixCls}_${this.theme}`]
    }

  }
})
</script>

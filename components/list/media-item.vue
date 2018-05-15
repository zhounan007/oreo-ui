<template>
  <div :class="linkClass">
    <div class="oreo-list-item-thumb">
      <slot name="thumb">
        <img :src="thumb" alt="" v-if="thumb !== void 0">
      </slot>
    </div>
    <div class="oreo-list-item-line">
      <div class="oreo-list-item-content">
        <slot name="content">
          <div class="oreo-list-item-title">{{title}}</div>
          <div class="oreo-list-item-brief">{{brief}}</div>
          <div class="oreo-list-item-info">
            <div v-for="(item,index) in mediaInfo" :key="index">{{item}}</div>
          </div>
        </slot>
      </div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'oreo-list-item'
export default {
  name: 'z-media-item',
  props: {
    title: String,
    brief: String,
    thumb: String,
    mediaInfo: Array
  },
  computed: {
    linkClass() {
      const self = this
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-link`]: true,
        [`${prefixCls}-search`]: true
      }
    }
  }
}
</script>

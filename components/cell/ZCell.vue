<template>
  <div :class="classNames">
      <div class="oreo-list-item-thumb">
              <slot name="icon">
              </slot>
          </div>
      <div class="oreo-list-item-line">
          <div class="oreo-list-item-content">
            <div class="oreo-list-item-title">{{title}}</div>    
            <div class="oreo-list-item-brief">{{label}}</div>
          </div>
          <div class="oreo-list-item-extra">{{value}}</div>
          <div class="oreo-list-arrow" v-if="link"></div>
      </div>
  </div>
</template>
<script>
const prefixCls = 'oreo-list-item'
export default {
    name: 'z-cell',
    props: {
        title: String,
        value: [String, Number],
        link: {
            type: Boolean,
            default: false
        },
        label: String,
        url: String
    },
    computed: {
        classNames() {
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-link`]: this.link,
                [`${prefixCls}-multi`]: this.label
            }
        }
    }
}
</script>

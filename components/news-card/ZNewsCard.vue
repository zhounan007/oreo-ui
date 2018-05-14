<template>
  <div class="oreo-list-item oreo-list-item-search">
    <div class="oreo-list-item-line">
      <div class="oreo-list-item-content">
        <div class="oreo-list-item-title">{{title}}</div>
        <div class="oreo-list-item-info">
          <slot name="info">
            <div>简单</div>
            <div>实用</div>
          </slot>
        </div>
      </div>
    </div>
    <div class="oreo-list-item-thumb" style="margin: 10px 0;">
      <img :src="img" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'z-news-card',
  props: {
    title: String,
    img: String
  }
}
</script>
<style lang="less" scoped>
.oreo-list-item.oreo-list-item-search .oreo-list-item-thumb img {
  width: 2.35rem;
  height: 1.7rem;
}
.oreo-list-item.oreo-list-item-search
  .oreo-list-item-line
  .oreo-list-item-content
  .oreo-list-item-title {
  font-size: 0.34rem;
}
</style>

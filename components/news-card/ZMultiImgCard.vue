<template>
    <div class="oreo-list-item oreo-list-item-search">
        <div class="oreo-list-item-line oreo-list-item-column">
            <div class="oreo-list-item-content" style="width: 100%">
                <div class="oreo-list-item-title">{{title}}</div>
            </div>

            <div class="oreo-list-item-thumb" style="margin: 10px 0;">
                <img v-for="(val, index) in img" :key="index" :src="val" alt="">
            </div>
            <div class="oreo-list-item-info">
                <slot name="info">
                    <div>简单</div>
                    <div>实用</div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'z-multiImg-card',
    props: {
        title: {
            type: String,
            default: '包含各类常用的`CSS`样式, 简单、方便、谁用谁知道😱...啦啦啦啦啦啦啦'
        },
        img: {
            type: Array,
            defualt: ['http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg']
        }
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

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
    </div>
</template>
<script>
export default {
    name: 'z-text-card',
    props: {
        title: {
            type: String,
            default: '包含各类常用的`CSS`样式, 简单、方便、谁用谁知道😱...啦啦啦啦啦啦啦'
        }
    }
}
</script>
<style lang="less" scoped>
.oreo-list-item.oreo-list-item-search
  .oreo-list-item-line
  .oreo-list-item-content
  .oreo-list-item-title {
  font-size: 0.34rem;
}
</style>

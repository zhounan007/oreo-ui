
<template>
    <flexview>
        <scrollview title="List 列表" >
            <div class="demo-body">
                <h2>Basic</h2>
                <div class="demo-content">
                    <z-list header="带说明的列表项">
                        <z-list-item :link="false" title="标题" extra="内容"></z-list-item>
                    </z-list>
                    <z-list header="带图标，带链接，不带border" :line="false">
                        <z-list-item thumb="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" title="标题"></z-list-item>
                        <z-list-item>
                            <template slot="thumb">
                                <i class="oreo-icon-user" style="font-size:32px;"></i>
                            </template>
                            <template slot="content">标题</template>
                            <template slot="extra">扩展内容</template>
                        </z-list-item>
                    </z-list>
                    <z-list header="多行，带图标，带链接">
                        <z-list-item :link="false" title="标题" brief="描述性文字好长好长好长好长好长好长好长好长好长好长" extra="扩展内容"></z-list-item>
                        <z-list-item thumb="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" title="标题" brief="描述。。。" extra="扩展内容"></z-list-item>
                        <z-list-item :multi="true">
                            <template slot="thumb">
                                <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="">
                            </template>
                            <template slot="content">
                                <div class="oreo-list-item-title">标题</div>
                                <div class="oreo-list-item-brief">描述性文字好长好长好长好长好长好长好长好长好长好长</div>
                            </template>
                            <template slot="extra">扩展内容</template>
                        </z-list-item>
                    </z-list>
                </div>
                <h2>多媒体 列表</h2>
                <div class="demo-content">
                    <z-list header="多行，带图标，带简介，普通排列方式">
                        <z-media-item thumb="http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg" title="包含各类常用的`CSS`样式, 简单、方便、谁用谁知道😱..." brief="Oreo框架" :mediaInfo="['简单','方便','实用']"></z-media-item>
                        <z-media-item>
                            <template slot="thumb">
                                <img src="http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg" alt="">
                            </template>
                            <template slot="content">
                                <div class="oreo-list-item-title">包含各类常用的`CSS`样式, 简单、方便、谁用谁知道😱...</div>
                                <div class="oreo-list-item-brief">Oreo框架</div>
                                <div class="oreo-list-item-info">
                                    <div>简单</div>
                                    <div>方便</div>
                                    <div>实用</div>
                                </div>
                            </template>
                        </z-media-item>
                    </z-list>
                    <z-list header="多行，带图标，带简介，flex布局方式" :flex="true" footer="列表Footer">
                        <z-media-item thumb="http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg" title="包含各类常用的`css`样式, 简单、方便、谁用谁知道😱..." brief="Oreo框架" :mediaInfo="['简单','方便','实用']"></z-media-item>
                        <z-media-item thumb="http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg" title="包含各类常用的`css`样式, 简单、方便、谁用谁知道😱..." brief="Oreo框架" :mediaInfo="['简单','方便','实用']"></z-media-item>
                        <z-media-item thumb="http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg" title="包含各类常用的`css`样式, 简单、方便、谁用谁知道😱..." brief="Oreo框架" :mediaInfo="['简单','方便','实用']"></z-media-item>
                    </z-list>
                </div>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from '../flexview'
import scrollview from '../scrollview'
export default {
    name: 'button',
    data() {
        return {
        }
    },
    components: {
        flexview,
        scrollview
    }
}
</script>
<style lang="less" scopd>
.demo-body {
  .oreo-button {
    margin: 1em 0;
  }
}
</style>

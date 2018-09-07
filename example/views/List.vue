
<template>
    <flexview>
        <scrollview title="List 列表" sub-title="包含基础,Card效果">
            <div class="demo-body">

                <oreo-cell-group header="基础布局">
                    <oreo-cell  
                        title="很长很长很长的标题" 
                        value=""
                        label="描述信息"
                        link
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                    <oreo-cell  
                        title="返回首页" 
                        value=""
                        link
                        to="/"
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                </oreo-cell-group>

                <oreo-cell-group header="排版样式">
                     <oreo-cell  
                        title="文本展示" 
                        link
                        to="/listview/TextCard"
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                    <oreo-cell  
                        title="新闻" 
                        link
                        to="/listview/NewsCard"
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                    <oreo-cell  
                        title="多图片布局" 
                        value=""
                        link
                        to="/listview/MultiImgCard"
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                </oreo-cell-group>

                <oreo-cell-group header="异步加载">
                     <oreo-cell  
                        title="下拉刷新 PullToRefresh" 
                        link
                        to="/listview/PullToRefresh"
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                    <oreo-cell  
                        title="无限加载 InfiniteScroll" 
                        link
                        to="/listview/InfiniteScroll"
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                    <oreo-cell  
                        title="PullToRefresh + InfiniteScroll" 
                        link
                        to="/listview/Combination"
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                    </oreo-cell>
                </oreo-cell-group>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
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

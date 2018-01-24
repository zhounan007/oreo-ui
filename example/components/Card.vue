<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <div class="demo-name">
                    Card
                </div>
                <div class="demo-subtitle"></div>
            </div>
            <div class="demo-body">
                <h2>
                    卡片视图
                </h2>
                <z-card header="页眉" footer="页脚" content="卡片视图包含页眉页脚，页眉通常用来显示面板标题，页脚用来显示额外信息或支持的操作（比如点赞、评论等）"></z-card>
                <z-card :media="true">
                    <template slot="card-header">
                        <img src="http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg" alt="">
                    </template>
                    <template slot="card-content-inner">
                        <p class="card-post">发布于2017年10月30日</p>
                        <p class="card-details">这里简单介绍内容详情...</p>
                    </template>
                    <template slot="card-footer">
                        <a href="javascript:;">Comment</a>
                        <a href="javascript:;">Fabulous</a>
                    </template>
                </z-card>
                <z-card :media="true">
                    <template slot="card-header-inner">
                        <img class="card-logo" src="res/imgs/example.png" alt="">
                        <div class="card-media-body">
                            <p class="card-media-body-title">hello word</p>
                            <p class="card-media-body-detail">Welcome to Oreo</p>
                        </div>
                    </template>
                    <template slot="card-content">
                        <img src="http://owz1rt8et.bkt.clouddn.com/assets/nature01.jpg" alt="">                        
                    </template>
                    <template slot="card-content-inner">
                        <p class="card-post">发布于2017年10月30日</p>
                        <p class="card-details">这里简单介绍内容详情...</p>
                    </template>
                    <template slot="card-footer">
                        <a href="javascript:;">Comment</a>
                        <a href="javascript:;">Fabulous</a>
                        <a href="javascript:;">Forward</a>
                    </template>
                </z-card>
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

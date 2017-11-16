
<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <div class="demo-name">
                    <z-icon type="home"></z-icon>
                    Button 按钮
                </div>
                <div class="demo-subtitle"></div>
            </div>
            <div class="demo-body" style="padding:0;">
                <h2>
                    Type
                </h2>
    
                <z-grid :data="icons" border :column="4">
                    <template scope="props" slot="item">
                        <z-grid-item :index="props.item">
                            <z-icon :type="props.item"></z-icon>
                            <div class="oreo-grid-item-text">{{props.item}}</div>
                        </z-grid-item>
                    </template>
                </z-grid>
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
            icons: ['activity', 'airplay', 'box', 'grid', 'camera', 'bluetooth', 'book']
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

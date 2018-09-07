
<template>
    <flexview>
        <scrollview title="Icon 图标" sub-title="Svg Sprite">
            <div class="demo-body " >
                <h2>
                    Basic
                </h2>

                <oreo-grid :data="icons" line :column="4">
                    <template slot-scope="{item}">
                        <oreo-icon :name="item"></oreo-icon>
                        <div class="oreo-grid_text">{{item}}</div>
                    </template>
                </oreo-grid>
                
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'flex',
    data() {
        return {
            icons: ['arrow-down', 'arrow-up', 'close', 'down', 'fail', 'home', 'left', 'right', 'success', 'up', 'user']
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        handlerItem(index, item) {
            console.log(index)
        }
    }
}
</script>
<style lang="less" scopd>
.demo-body {
}
</style>

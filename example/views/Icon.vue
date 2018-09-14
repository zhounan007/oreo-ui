
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
import Icons from '../icons.json'
export default {
    name: 'flex',
    data() {
        return {
            icons: Icons
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

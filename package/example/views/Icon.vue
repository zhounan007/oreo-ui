
<template>
    <flexview>
        <scrollview title="Icon 图标" sub-title="Svg Sprite">
            <div class="demo-body " >
                <h2>
                    Basic
                </h2>

                <z-grid :data="icons" border :column="4">
                    <z-grid-item :index="props.item" slot-scope="props" slot="item">
                        <z-icon :type="props.item"></z-icon>
                        <div class="oreo-grid-item-text">{{props.item}}</div>
                    </z-grid-item>
                </z-grid>
                
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
            icons: ['grid', 'heart', 'delete', 'link', 'list', 'layout', 'info']
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

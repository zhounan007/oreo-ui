
<template>
    <flexview>
        <scrollview>
            <h2>Oreo-Vue</h2>
            <p>A mobile UI Components based on Vue2.x &amp; Oreo-UI</p>
    
            <z-grid :data="module" border @click="handlerModuleItem">
                <template scope="props" slot="item">
                    <z-grid-item :index="props.item.index">{{props.item.text}}</z-grid-item>
                </template>
            </z-grid>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
import pages from './set'
export default {
    name: 'button',
    data() {
        return {
            module: []
        }
    },
    components: {
        flexview,
        scrollview
    },
    created() {
        pages.forEach(page => {
            this.module.push({
                text: page.slice(0, page.length - 4),
                index: page.slice(0, page.length - 4)
            })
        })
    },
    methods: {
        handlerModuleItem(index, item) {
            this.$router.push({ path: index })
        }
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

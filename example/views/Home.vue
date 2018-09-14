
<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <h2 class="demo-title">Oreo-Vue</h2>
                <p class="demo-subtitle">A mobile UI Components based on Vue2.x &amp; Oreo-UI</p>
            </div>
    
            <oreo-grid :data="module" line @click="handlerModuleItem">
                 <template slot-scope="{item}">
                     {{item.text}}
                    </template>
            </oreo-grid>
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
            if (page.split('/').length < 2) {
                this.module.push({
                    text: page.slice(0, page.length - 4),
                    index: page.slice(0, page.length - 4)
                })
            }
        })
    },
    methods: {
        handlerModuleItem(item) {
            this.$router.push({ path: item.index })
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

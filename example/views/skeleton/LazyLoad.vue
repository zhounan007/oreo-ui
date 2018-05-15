
<template>
    <flexview>
        <scrollview title="Skeleton 骨架屏" sub-title="延迟加载">
            <div class="demo-body demo-wrap" >
                <h2>
                    LazyLoad
                </h2>
                
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from '@e/views/flexview'
import scrollview from '@e/views/scrollview'
export default {
    name: 'skeleton-lazy',
    data() {
        return {
            array: [{
                type: '',
                text: 'Basic Button'
            }, {
                type: 'primary',
                text: 'Primary Button'
            }, {
                type: 'success',
                text: 'Success Button'
            }, {
                type: 'error',
                text: 'Error Button'
            }]
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

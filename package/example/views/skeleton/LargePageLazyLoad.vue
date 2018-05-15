
<template>
    <flexview>
        <scrollview title="Skeleton 骨架屏" sub-title="延迟加载">
            <div class="demo-body demo-wrap" >
                <h2>
                    LargePageLazyLoad
                </h2>

                <z-skeleton v-for=" i in 10" :key="i">
                    <st-card></st-card>
                    <st-card-skeleton slot="skeleton"></st-card-skeleton>    
                </z-skeleton>

                <z-skeleton>
                    <st-image slot="skeleton"></st-image>
                    <st-image-skeleton ></st-image-skeleton>    
                </z-skeleton>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from '@e/views/flexview'
import scrollview from '@e/views/scrollview'

import stCard from '@e/components/StCard'
import stCardSkeleton from '@e/components/StCardSkeleton'
import stImage from '@e/components/StImage'
import stImageSkeleton from '@e/components/StImageSkeleton'

export default {
    name: 'skeleton-large-page',
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
        scrollview,
        stCard,
        stCardSkeleton,
        stImage,
        stImageSkeleton
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

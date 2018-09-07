
<template>
    <flexview>
        <scrollview title="Flex 布局" sub-title="基本实例">
            <div class="demo-body demo-wrap" >
                <h2>
                    Basic
                </h2>
                
                <oreo-flex>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                </oreo-flex>

                <oreo-flex>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                </oreo-flex>

                <oreo-flex>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                      <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                    <oreo-flex-item>
                        <div class="demo-flex-item">Item</div>
                    </oreo-flex-item>
                </oreo-flex>
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
  .demo-flex-item {
    text-align: center;
    background: #bbb;
    padding: 0.2rem 0.1rem;
    margin: 0.1rem;
  }
}
</style>


<template>
    <flexview>
        <scrollview title="Card 卡片" sub-title="支持各种类型">
            <div class="demo-body" >
                <h2>
                    Type
                </h2>
                <oreo-button small @click="goto">pullToRefresh</oreo-button>
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
    },
    methods: {
        goto() {
            this.$router.push('/listview/PullToRefresh')
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

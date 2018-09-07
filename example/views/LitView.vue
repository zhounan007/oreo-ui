
<template>
    <flexview>
        <scrollview title="ListView" sub-title="List综合运用">
            <div class="demo-body demo-wrap">
                <h2>
                    PullToRefresh
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
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        openAlert(type) {
            this.$dialog({
                message: 'Hello World',
                type: 'alert',
                theme: type,
                okButtonText: 'ok',
                cancelButtonText: 'cancel'

            }).then(action => {
                console.log('alert callback with action: ' + action)
            })
        },
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

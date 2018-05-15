
<template>
    <flexview>
        <scrollview title="Skeleton" sub-title="骨架屏综合运用">
            <div class="demo-body demo-wrap">
                <h2>
                    type
                </h2>
                <router-link  to="/skeleton/LargePageLazyLoad" >
                    <z-button small >LargePageLazyLoad</z-button>
                </router-link>
                <router-link  to="/skeleton/LazyLoad" >
                    <z-button small >LazyLoad</z-button>
                </router-link>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'skeleton-demo',
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
            this.$router.push('/skeleton/')
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

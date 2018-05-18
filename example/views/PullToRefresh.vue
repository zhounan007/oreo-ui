
<template>
    <flexview>
        <scrollview title="Pull Refresh 下拉刷新" sub-title="">
            <div class="demo-body" >
                

                <div style=" position: relative;height: 500px">
                    <z-pull-to-refresh v-model="isLoading" @refresh="onRefresh">
                        <section class="van-doc-demo-block">
                            <div v-for="n in length" :key="n">{{n}}+列表内容</div>
                        </section>
                    </z-pull-to-refresh>
                </div>
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
            isLoading: false,
            length: 30
        }
    },
    components: {
        flexview,
        scrollview
    },
    mounted() {
    },
    methods: {
        onRefresh() {
            setTimeout(() => {
                this.isLoading = false
                this.length = Math.floor(Math.random() * 10) * 10
                this.$toast('刷新成功')
            }, 500)
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
.oreo-pull-refresh,
.oreo-pull-refresh-track {
  height: 100%;
}
</style>

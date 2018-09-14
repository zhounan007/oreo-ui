
<template>
    <flexview>
        <scrollview title="Pull Refresh 下拉刷新" sub-title="">
            <oreo-pull-to-refresh ref="list" v-model="isLoading" @refresh="onRefresh" style="margin-top: 80px;">
                    <oreo-cell-group>
                        <oreo-cell v-for="n in length" :key="n" :title=" n+'列表内容' "></oreo-cell>
                    </oreo-cell-group>
            </oreo-pull-to-refresh>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from '../flexview'
import scrollview from '../scrollview'
export default {
    name: 'button',
    data() {
        return {
            isLoading: false,
            length: 30,
            wrapperHeight: 0
        }
    },
    components: {
        flexview,
        scrollview
    },
    mounted() {
    },
    methods: {
        handleClick() {
            this.$refs.list.$el.scrollTop = 0
        },
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
</style>

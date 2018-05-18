
<template>
    <flexview>
        <scrollview title="下拉刷新 无限加载" sub-title="">
            <z-pull-to-refresh v-model="isLoading" @refresh="onRefresh" style="margin-top:160px;">
                <z-infinite-scroll v-model="loading" @load="loadMore" :disabled="disabled">
                    <z-cell-group>
                        <z-cell v-for="item in list" :key="item" :title="item+''"></z-cell>
                    </z-cell-group>
                </z-infinite-scroll>
            </z-pull-to-refresh>
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
            loading: false,
            list: [],
            disabled: false
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
                this.length = Math.floor(Math.random() * 5)
                for (let i = 0; i < this.length; i++) {
                    const text = (new Date()).getTime()
                    this.list.unshift(text + ' :' + i)
                }
                this.$toast('刷新成功')
            }, 500)
        },
        loadMore() {
            setTimeout(() => {
                for (let i = 0; i < 10; i++) {
                    const text = this.list.length + 1;
                    this.list.push(text < 10 ? '0' + text : text);
                }
                this.loading = false;

                if (this.list.length >= 40) {
                    this.disabled = true;
                }
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


<template>
    <flexview>
        <scrollview title="Infinite Scroll 无限滚动" sub-title="">
            <oreo-infinite-scroll v-model="loading" @load="loadMore" :disabled="disabled" >
                 <oreo-cell-group>
                        <oreo-cell v-for="item in list" :key="item" :title="item+''"></oreo-cell>
                </oreo-cell-group>
            </oreo-infinite-scroll>

                 <!-- <div style=" position: relative;height: 700px">
                    <oreo-pull-to-refresh v-model="isLoading" @refresh="onRefresh">
                      
                        <oreo-infinite-scroll v-model="loading" @load="loadMore" :disabled="disabled">
                            <oreo-cell v-for="item in list" :key="item" :title="item+''"></oreo-cell>
                        </oreo-infinite-scroll>
                    </oreo-pull-to-refresh>
                </div> -->
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
                this.length = Math.floor(Math.random() * 10)
                console.log('length:' + this.length)
                this.list = [];
                for (let i = 0; i < this.length; i++) {
                    const text = this.list.length + 1;
                    this.list.push(text < 10 ? '0' + text : text);
                }
                this.$toast('刷新成功')
            }, 5000)
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

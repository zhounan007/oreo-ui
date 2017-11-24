
<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <div class="demo-name">
                    Toast 提示
                </div>
                <div class="demo-subtitle"></div>
            </div>
            <div class="demo-body">
                <h2>
                    位置
                </h2>
                <z-button small @click="clickByType()">文本提示</z-button>
    
                <h2>
                    类型
                </h2>
                <z-button v-for="t in ['loading','success','failure']" :key="t" small @click="clickByType(t)">{{t}}</z-button>
    
            </div>
    
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'toast',
    data() {
        return {
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        clickByType(type) {
            let msg = '正在努力加载中...'
            if (type) {
                this.$toast[type](msg)
            } else {
                // this.$toast({ 'message': msg, 'mode': 'horizontal' })

                this.$loading()
                setTimeout(() => {
                    this.$loading().close()
                }, 3 * 1000)
            }
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


<template>
    <flexview>
        <scrollview title="Toast 提示" sub-title="支持不同类型">
            <div class="demo-body  demo-wrap">
                <h2>
                    位置
                </h2>
                <z-button small @click="handlerByType()">Loading</z-button>
    
                <h2>
                    类型
                </h2>
                <z-button small @click="handlerByType('text')">Text</z-button>

                <z-button v-for="t in ['loading','success','failure']" :key="t" small @click="handlerByType(t)">{{t}}</z-button>
    
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
        handlerByType(type) {
            let msg = '正在努力加载中...'
            if (type) {
                if (type === 'text') {
                    this.$toast(msg)
                    return
                }
                this.$toast[type](msg)
            } else {
                // this.$toast({ 'message': msg, 'mode': 'horizontal' })

                this.$loading({
                    message: msg,
                    mode: 'horizontal'
                })
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

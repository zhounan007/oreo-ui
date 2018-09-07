
<template>
    <flexview>
        <scrollview title="Toast 提示" sub-title="支持不同类型">
            <div class="demo-body  demo-wrap">
                <h2>
                    位置
                </h2>
                <oreo-button small @click="handlerByType()">Loading</oreo-button>
    
                <h2>
                    类型
                </h2>
                <oreo-button small @click="show =!show">Text</oreo-button>
                <oreo-button small @click="handlerByType('text')">Text</oreo-button>

                <oreo-button v-for="t in ['loading','success','fail']" :key="t" small @click="handlerByType(t)">{{t}}</oreo-button>
    

                <oreo-toast v-model="show" message="正在努力加载中" type="home"></oreo-toast>
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
            show: false
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
                // this.$toast.loading(msg)
                this.$toast.loading({ 'message': msg, 'mode': 'horizontal' })
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

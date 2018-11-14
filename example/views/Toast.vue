
<template>
    <flexview>
        <scrollview title="Toast 提示" sub-title="支持不同类型">
            <div class="demo-body  demo-wrap">
                <h2>
                    位置
                </h2>
                <oreo-button small @click="handleByType()">Loading</oreo-button>

    
                <h2>
                    类型
                </h2>
                
                <oreo-button small @click="handleByType('text')">Text</oreo-button>

                <oreo-button v-for="t in ['loading','success','fail']" :key="t" small @click="handleByType(t)">{{t}}</oreo-button>
    
                <h2>
                    自定义
                </h2>

                <oreo-button small @click="show =!show">Text</oreo-button>

                <oreo-button small @click="handleToast">Toast.Loading</oreo-button>

                <oreo-button small @click="handleLoading">全屏Loading</oreo-button>
                

                <oreo-toast v-model="show" message="正在努力加载中" type="loading"></oreo-toast>
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
        handleByType(type) {
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
        },
        handleLoading() {
            const t = this.$loading()
            setTimeout(() => {
                t.close()
            }, 3 * 1000)
        },
        handleToast() {
            let second = 5
            let msg = second => `` //倒计时 ${second} 秒
            // const t = this.$toast.loading({ message: msg(second), duration: 0 })
            const t = this.$toast.loading({ duration: 0 })
            // const t1 = this.$toast.loading({ message: msg(second + 10), duration: 8 * 1000 })

            let timer = setInterval(() => {
                second--
                if (second) {
                    // t.message = msg(second)
                } else {
                    clearInterval(timer)
                    t.clear()
                }
            }, 1 * 1000)
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

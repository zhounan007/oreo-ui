<template>
  <flexview>
    <scrollview title="Keyboard " sub-title="数字键盘">

        <div class="demo-body demo-wrap" >
          <oreo-button small @click="handleDefaultKeyboard">默认样式</oreo-button>

          <oreo-button small @click="handleFridayKeyboard">Friday样式</oreo-button>
        </div>
       
     <oreo-number-keyboard :show="t1.show" 
                        :extraKey="t1.extraKey" 
                        :title="t1.title" 
                        @input="handleInput"
                        @done="handleDone"
                        @delete="handleDel"
                        >
    </oreo-number-keyboard>

     <oreo-number-keyboard :show="t2.show"
                        :theme="t2.theme" 
                        :extraKey="t2.extraKey"
                        :title="t2.title"
                        @input="handleInput"
                        @done="handleDone"
                        @delete="handleDel"
                        >
    </oreo-number-keyboard>

    </scrollview>
  </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'actionsheet',
    data() {
        return {
            current: '',
            t1: {
                show: false,
                extraKey: '.',
                data: []
            },
            t2: {
                show: false,
                theme: 'friday',
                extraKey: '.',
                data: []
            },
            tmp: []
        }
    },
    components: {
        flexview,
        scrollview
    },
    mounted() {
    },
    methods: {
        handleDefaultKeyboard() {
            this.current = 't1'
            this[this.current].show = true
        },
        handleFridayKeyboard() {
            this.current = 't2'
            this[this.current].show = true
        },
        handleInput(v) {
            console.log(v)
            this[this.current].data.push(v)
        },
        handleDone() {
            this[this.current].show = false
            console.log(this[this.current].data)
        },
        handleDel() {
            const t = this[this.current].data.pop()
            console.log(t)
        }
    }
}
</script>
<style lang="less" scoped>
.message-content {
  height: 0.6rem;
  font-size: 0.26rem;
  padding: 0 0.12rem;
  text-align: center;
  margin-bottom: 0.2rem;
  .span_input {
    color: #999;
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 100%;
    line-height: 0.6rem;
    border: 1px solid #999;
    border-radius: 5px;
  }
}
</style>
<template>
  <flexview>
    <scrollview title="Keyboard " sub-title="数字键盘">

        <div class="demo-body demo-wrap" >
          <z-button small @click="handleDefaultKeyboard">默认样式</z-button>

          <z-button small @click="handleFridayKeyboard">Friday样式</z-button>
        </div>
       
     <z-number-keyboard v-model="t1.show" :extraKey="t1.extraKey" :title="t1.title"></z-number-keyboard>

     <z-number-keyboard v-model="t2.show" :theme="t2.theme" :extraKey="t2.extraKey" :title="t2.title"></z-number-keyboard>

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
            t1: {
                title: '请输入密码',
                show: false,
                extraKey: ''
            },
            t2: {
                title: '请输入密码',
                show: false,
                theme: 'friday',
                extraKey: ''
            }
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
            this.t1.show = true
        },
        handleFridayKeyboard() {
            this.t2.show = true
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
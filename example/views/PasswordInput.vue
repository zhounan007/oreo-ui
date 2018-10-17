<template>
  <flexview>
    <scrollview title="PasswordInput " sub-title="密码输入框">

        <div class="demo-body demo-wrap" >
            <oreo-button small style="margin-bottom:15px;" @click="showPwdPopup">弹窗式密码键盘</oreo-button>

           <oreo-password-input @focus="t1.show =true" :value="password" info="6位数字密码"></oreo-password-input> 
        </div>
       
       <oreo-number-keyboard :show="t1.show"
                        :theme="t1.theme" 
                        :extraKey="t1.extraKey"
                        :title="t1.title"
                        @input="handleInput"
                        @done="handleDone('t1')"
                        @delete="handleDel('t1')">
      </oreo-number-keyboard>

    <oreo-number-keyboard :show="t2.show" overlay @click-overlay="t2.show = false"
                @input="handleT2Input"
                @done="handleDone('t2')"
                @delete="handleDel('t2')">
        <div class="oreo-number-keyboard__title" slot="title">
               请输入查询密码 
        </div>       
        <oreo-password-input @focus="t2.show =true" :value="password2"  slot="password" error="密码错误" class="customer-pwd-input oreo-hairline oreo-hairline_bottom"></oreo-password-input> 
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
            t1: {
                show: false,
                theme: 'friday',
                extraKey: '',
                data: []
            },
            t2: {
                keyboard: true,
                show: false,
                data: []
            }
        }
    },
    components: {
        flexview,
        scrollview
    },
    computed: {
        password() {
            return this.t1.data.join('')
        },
        password2() {
            return this.t2.data.join('')
        }
    },
    mounted() {
    },
    methods: {
        showPwdPopup() {
            this.t2.show = true
        },
        handleT2Input(v) {
            console.log(v)
            this.t2.data.push(v)
        },
        handleInput(v) {
            console.log(v)
            this.t1.data.push(v)
        },
        handleDone(c) {
            this[c].show = false
            console.log(this[c].data)
        },
        handleDel(c) {
            const t = this[c].data.pop()
            console.log(t)
        }
    }
}
</script>
<style lang="less" scoped>
.customer-pwd-input {
  margin: 0;
  padding: 30px;
}
</style>
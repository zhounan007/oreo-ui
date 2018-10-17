
<template>
    <flexview>
        <scrollview title="Dialog 对话框" sub-title="Alert, Confirm">
            <div class="demo-body demo-wrap">
                <h2>
                    Alert
                </h2>
                <oreo-button small @click="openAlert('android')">Android Alert</oreo-button>
    
                <oreo-button small @click="openAlert('ios')">iOS Alert</oreo-button>
    
                <h2>
                    Confirm
                </h2>
                <oreo-button small @click="openConfirm('android')">Android Confirm</oreo-button>
    
                <oreo-button small @click="openConfirm('ios')">iOS Confirm</oreo-button>

                <h2>
                    Custom
                </h2>
                <oreo-button small @click="show= !show">Operation</oreo-button>

                <oreo-button small @click="show1= !show1">Operation</oreo-button>

                <oreo-button small @click="show2= !show2">Login</oreo-button>
    
                <oreo-dialog v-model="show" :buttons="opers" @select="handleOpers">
                </oreo-dialog>

                <oreo-dialog v-model="show1" :buttons="opers1" @select="handleOpers" title="请选择你的交通方式" closeOverlayByClick>
                </oreo-dialog>

                <oreo-dialog v-model="show2"  @ok="handleOk">
                    <div class=" oreo-hairline oreo-hairline_surround" >
                        <div class="oreo-dialog__input">
                            <input type="text" placeholder="用户名" v-model="username">
                        </div>
                        <div class="oreo-dialog__input">
                            <input type="password" placeholder="密码" v-model="password">
                        </div>
                    </div>
                </oreo-dialog>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'dialog',
    data() {
        return {
            show: false,
            show1: false,
            show2: false,
            username: '',
            password: '',
            opers: [
                { text: '收藏' },
                { text: '屏蔽' },
                { text: '举报' },
                { text: '取消关注' }
            ],
            opers1: [
                { text: '骑车' },
                { text: '火车' },
                { text: '地铁' },
                { text: '飞机' }
            ]
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        openAlert(type) {
            this.$dialog.alert({
                title: 'Vue-Oreo',
                message: 'Hello World',
                theme: type
            }).then(action => {
                console.log('alert callback with action: ' + action)
            })
        },
        openConfirm(type) {
            this.$dialog.confirm({
                message: 'Are you ok?',
                type: 'confirm',
                theme: type
            }).then(action => {
                console.log('confirm callback with ' + action)
            }).catch(action => {
                console.log('confirm callback with ' + action)
            })
        },
        handleOpers(item) {
            console.log(item)
        },
        handleOk() {
            console.log(this.username)
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

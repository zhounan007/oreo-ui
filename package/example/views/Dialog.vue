
<template>
    <flexview>
        <scrollview title="Dialog 对话框" sub-title="Alert, Confirm">
            <div class="demo-body demo-wrap">
                <h2>
                    Alert
                </h2>
                <z-button small @click="openAlert('android')">Android Alert</z-button>
    
                <z-button small @click="openAlert('ios')">iOS Alert</z-button>
    
                <h2>
                    Confirm
                </h2>
                <z-button small @click="openConfirm('android')">Android Confirm</z-button>
    
                <z-button small @click="openConfirm('ios')">iOS Confirm</z-button>
    
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'button',
    data() {
        return {
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        openAlert(type) {
            this.$dialog({
                message: 'Hello World',
                type: 'alert',
                theme: type,
                okButtonText: 'ok',
                cancelButtonText: 'cancel'

            }).then(action => {
                console.log('alert callback with action: ' + action)
            })
        },
        openConfirm(type) {
            this.$dialog({
                message: 'Are you ok?',
                type: 'confirm',
                theme: type
            }).then(action => {
                console.log('confirm callback with ' + action)
            }).catch(action => {
                console.log('confirm callback with ' + action)
            })
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

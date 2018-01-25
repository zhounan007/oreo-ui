<template>
    <z-modal ref="dialog" :closeOnClickModal="false">
        <div class="oreo-dialog oreo-modal-content" slot="inner" :class="themeClass">
            <div class="oreo-dialog-inner" v-if="message || title">
                <slot>
                    <div class="oreo-dialog-title">{{title}}</div>
                    <div class="oreo-dialog-text">{{message}}</div>
                </slot>
            </div>
            <div class="oreo-dialog-buttons">
                <a href="javascript:;" class="oreo-dialog-button" @click.self="handlerAction('ok')" v-text="okButtonText"></a>
                <a href="javascript:;" class="oreo-dialog-button" v-if="type!=='alert'" @click.self="handlerAction('cancel')" v-text="cancelButtonText"></a>
            </div>
        </div>
    </z-modal>
</template>
<script>
import { ZModal } from '../modal'
import device from '../../src/script/device'
export default {
    name: 'z-dialog',
    components: {
        ZModal
    },
    data() {
        return {
            visible: false, // 显示否
            title: '',
            message: '',
            action: '', // 动作
            type: '', // alert, confirm
            theme: '', // ios,android
            okButtonText: '确定',
            cancelButtonText: '取消'

        }
    },
    computed: {
        themeClass() {
            return this.theme === 'android' ? 'oreo-dialog-android' : ''
        }
    },
    beforeUpdate() {
        if (!this.theme) this.detectingDevice()
    },
    watch: {
        visible(v) {
            if (v) {
                this.openModal()
            } else {
                this.closeModal()
            }
        }
    },
    methods: {
        // 设置默认主题ios
        detectingDevice() {
            this.theme = device.os === device.ANDROID ? device.ANDROID : device.IOS
        },
        destroy() {
            this.$destroy()
            this.$el.parentNode.removeChild(this.$el)
        },
        openModal() {
            this.$refs['dialog'].open(() => {
            })
        },
        closeModal() {
            this.$refs['dialog'].close(() => {
                if (this.action) this.callback(this.action, this)
            })
        },
        close() {
            if (!this.visible) return
            this.visible = false
        },
        handlerAction(action) {
            this.action = action
            this.close()
        }
    }
}
</script>

<template>
    <transition name="oreo-dialog-zoom">
        <div :class="b([theme])" v-show="value">
              <div :class="b('inner')" v-if="title || message">
                    <div :class="b('title')">{{title}}</div>
                    <div :class="b('text')">{{message}}</div>
                    <div :class="b('field')" v-if="fields && fields.length >0">
                         <div :class="b('input')" v-for="(item,index) in fields" :key="index">
                            <input :type="item.type || 'text' " :placeholder="item.placeholder" >
                        </div>
                    </div>
              </div>
            
            <div :class="b('buttons',['vertical'])" v-if="buttons && buttons.length>0">
                    <a href="javascript:;" :class="b('button')"
                        v-for="(item,index) in buttons" :key="index"
                      @click.self="handleOperBtn(item)">
                      {{item.text}}
                    </a>
            </div>
            <div  :class="b('buttons')" v-else>
                <a href="javascript:;" :class="b('button',['bold'])" @click.self="handleAction('ok')">{{okButtonText || t('oreo.dialog.okButtonText')}}</a>
                <a href="javascript:;" :class="b('button')" v-if="showCancelButton" @click.self="handleAction('cancel')">{{cancelButtonText || t('oreo.dialog.cancelButtonText')}}</a>
            </div>
        </div>
    </transition>
</template>
<script>
import { device } from 'oreo-ui/components/utils/env'
import createBasic from 'oreo-ui/components/utils/create-basic'
import Mask from 'oreo-ui/components/mixins/mask'
export default createBasic({
    name: 'dialog',
    mixins: [Mask],
    props: {
        title: String,
        message: String,
        // ios or android
        theme: {
            type: String,
            default: 'ios'
        },
        okButtonText: String,
        cancelButtonText: String,
        showOkButton: {
            type: Boolean,
            default: true
        },
        showCancelButton: {
            type: Boolean,
            default: false
        },
        buttons: Array,
        beforeClose: Function,
        overlay: {
            type: Boolean,
            default: true
        },
        closeOverlayByClick: {
            type: Boolean,
            default: false
        },
        getContainer: {
            type: Function
            // default: () => document.body
        }
    },
    computed: {
        themeClass() {
            return this.theme === 'android' ? 'oreo-dialog-android' : ''
        }
    },
    beforeUpdate() {
        // if (!this.theme) this.detectingDevice()
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
        closeDialog(action) {
            this.$emit('input', false)
            this.$emit(action)
            this.callback && this.callback(action, this)
        },
        handleAction(action) {
            if (this.beforeClose) {
                this.beforeClose(action, () => {
                    this.closeDialog(action)
                })
            } else {
                this.closeDialog(action)
            }
        },
        handleOperBtn(item) {
            if (typeof item.callback === 'function') {
                item.callback(item)
            }
            this.$emit('input', false)
            this.$emit('select', item)
        }
    }
})
</script>


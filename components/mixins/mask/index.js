import Touch from '../touch'
import { on, off } from '../../utils/event'
import scrollUtils from '../../utils/scroll'
import context from './context'
import manager from './manager'

export default {
    mixins: [Touch],
    props: {
        // boolean
        value: Boolean,
        // 是否 显示 遮罩层
        overlay: Boolean,
        // 遮罩层样式
        overlayStyle: Object,
        // 遮罩类
        overlayClass: String,
        // 点击遮罩是否关闭
        closeOverlayByClick: Boolean,
        // return the mount node for modal
        getContainer: Function,
        // 是否 禁止滚屏
        lockScroll: {
            type: Boolean,
            default: true
        }
    },
    watch: {
        value(v) {
            this[v ? 'open' : 'close']()
        },
        overlay() {
            this.renderOverlay()
        },
        getContainer() {
            this.move()
        }

    },
    created() {
        this._maskId = 'mask-' + context.increment('id')
    },
    mounted() {
        if (this.getContainer) {
            this.move();
        }
        if (this.value) {
            this.open()
        }
    },
    activated() {
        if (this.value) {
            this.open()
        }
    },
    beforeDestroy() {
        this.close()
    },
    deactivated() {
        this.close()
    },
    methods: {
        open() {
            if (this.$isServer || this.opened) {
                return
            }
            this.opened = true
            this.renderOverlay()

            if (this.lockScroll) {
                on(document, 'touchstart', this.touchStart)
                on(document, 'touchmove', this.onTouchMove)
                if (!context.locked) {
                    document.body.classList.add('oreo-overflow-hidden')
                }
                context.locked = true
            }
        },
        close() {
            // debugger
            if (!this.opened) {
                return
            }
            if (this.lockScroll) {
                off(document, 'touchstart', this.touchStart)
                off(document, 'touchmove', this.onTouchMove)
                if (context.locked) {
                    document.body.classList.remove('oreo-overflow-hidden')
                }
                context.locked = false
            }
            this.opened = false
            manager.close(this._maskId)
            this.$emit('input', false)
        },
        move() {
            // debugger
            if (this.getContainer) {
                this.getContainer().appendChild(this.$el)
            } else {
                this.$parent.$el.appendChild(this.$el)
            }
        },
        onTouchMove() {
        },
        renderOverlay() {
            // debugger
            if (this.overlay) {
                manager.open(this, {
                    zIndex: context.increment('zIndex'),
                    className: this.overlayClass,
                    customStyle: this.overlayStyle
                })
            } else {
                manager.close(this._maskId)
            }
            this.$el.style.zIndex = context.increment('zIndex')
        }
    }
}

<template>
    <z-transition :name="modalTransition" :enter="enterClass" :leave="leaveClass">
        <div :class="classNames" v-show="visible" @click.self="handlerClick">
            <div :class="innerClassNames">
                <slot></slot>
            </div>
        </div>
    </z-transition>
</template>
<script>
import { ZTransition } from '../transition'

const modalPrefixCls = 'oreo-modal'
let openedModalNum = 0
let duration = 200

const position = {
    top: `${modalPrefixCls}-top ${modalPrefixCls}-backdrop`,
    bottom: `${modalPrefixCls}-bottom ${modalPrefixCls}-backdrop`,
    left: `${modalPrefixCls}-left ${modalPrefixCls}-backdrop`,
    right: `${modalPrefixCls}-right ${modalPrefixCls}-backdrop`
}

export default {
    name: 'z-modal',
    components: {
        ZTransition
    },
    data() {
        return {
            visible: false
        }
    },
    props: {
        position: {
            type: String,
            default: '',
            validator(val) {
                return ['', 'top', 'bottom', 'left', 'right'].indexOf(val) >= 0
            }
        },
        transition: {
            type: String,
            default: `${modalPrefixCls}-fade`
        },
        enterClass: String,
        leaveClass: String,
        max: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        modalTransition() {
            if (this.position) {
                return `${modalPrefixCls}-${this.position}`
            }
            if (this.enterClass === void 0 && this.leaveClass === void 0) {
                return this.transition
            }
        },
        classNames() {
            return {
                [`${modalPrefixCls}`]: true,
                [position[this.position]]: this.position,
                [`${modalPrefixCls}-backdrop`]: !this.position && !this.max,
                [`${modalPrefixCls}-max`]: this.max
            }
        },
        innerClassNames() {
            return {
                [`${modalPrefixCls}-content`]: true
            }
        }
    },
    beforeDestroy() {
        if (this.$el.parentNode) {
            this.$el.parentNode.removeChild(this.$el)
        }
    },
    methods: {
        handlerClick(e) {
            this.close()
        },
        open(callback) {
            if (this.visible) return
            document.body.appendChild(this.$el)

            this.__popstate = () => {
                if (
                    window.history.state &&
                    window.history.state.modalId &&
                    window.history.state.modalId >= this.__modalId
                ) {
                    return
                }
                openedModalNum--

                this.visible = false
                window.removeEventListener('popstate', this.__popstate)
                setTimeout(() => {
                    if (typeof this.__onClose === 'function') {
                        this.__onClose()
                    }
                    this.$emit('close')
                }, duration)
            }

            this.visible = true
            this.__modalId = ++openedModalNum

            window.history.pushState({ modalId: this.__modalId }, '')
            window.addEventListener('popstate', this.__popstate)

            setTimeout(() => {
                callback && callback()
                this.$emit('open')
            })
        },
        close(callback) {
            if (!this.visible) return

            this.__onClose = callback
            if (!window.history.state) {
                this.__popstate()
            } else {
                window.history.go(-1)
            }
        }
    }
}
</script>

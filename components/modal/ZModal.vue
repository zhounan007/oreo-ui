<template>
    <z-transition :name="modalTransition" :enter="enterClass" :leave="leaveClass">
        <div :class="classNames" v-show="visible" @click.self="handlerClick">
            <slot name="inner">
                <div :class="innerClassNames">
                    <slot></slot>
                </div>
            </slot>
        </div>
    </z-transition>
</template>
<script>
import { ZTransition } from '../transition'

const modalPrefixCls = 'oreo-modal'
let openedModalNum = 0
let duration = 200

const position = {
    top: `${modalPrefixCls}-top ${modalPrefixCls}-mask`,
    bottom: `${modalPrefixCls}-bottom ${modalPrefixCls}-mask`,
    left: `${modalPrefixCls}-left ${modalPrefixCls}-mask`,
    right: `${modalPrefixCls}-right ${modalPrefixCls}-mask`
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
        closeOnClickModal: {
            type: Boolean,
            default: true
        },
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
                [`${modalPrefixCls}-mask`]: !this.position && !this.max,
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
    created() {
    },
    methods: {
        handlerClick(e) {
            if (this.closeOnClickModal) {
                this.close()
            }
        },
        open(callback) {
            // debugger
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

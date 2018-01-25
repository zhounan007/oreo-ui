<template>
    <transition-group :tag='tagName' name='skeleton' style='position:relative;'>
        <div v-if='isInit' key='component'>
            <slot :loading='loading'></slot>
        </div>
        <div v-else-if='$slots.skeleton' key='skeleton'>
            <slot name='skeleton'></slot>
        </div>
        <div v-else key='loading'></div>
    </transition-group>
</template>
<script>
const prefix = 'z-skeleton'
export default {
    name: `${prefix}`,
    componentName: `${prefix}`,
    data() {
        return {
            isInit: false,
            loading: false,
            timer: null,
            observer: null
        }
    },
    props: {
        timeout: {
            type: Number
        },
        tagName: {
            type: String,
            default: 'div'
        },
        viewport: {
            type: typeof window !== 'undefined' ? window.HTMLElement : Object,
            default: () => null
        },
        rootMagin: {
            type: String
        },
        direction: {
            type: String,
            default: 'vertical'
        },
        maxWaitingTime: {
            type: Number,
            default: 50
        }
    },
    created() {
        if (this.timeout) {
            this.timer = setTimeout(() => {
                this.init()
                this.timer = null
            }, this.timeout)
        }
    },
    mounted() {
        if (!this.timeout) {
            let margin = ''

            switch (this.direction) {
                case 'vertical':
                    margin = `${this.rootMagin}px 0px`
                    break
                case 'horizontal':
                    margin = `0px ${this.rootMagin}px`
                    break
            }

            this.observer = new window.IntersectionObserver(this.handlerIntersection, {
                root: this.viewport,
                rootMagin: margin,
                threshold: [0, Number.MIN_VALUE, 0.01]
            })
            this.observer.observe(this.$el)
        }
    },
    beforeDestroy() {
        // 取消观察
        if (this.observer) {
            this.unobserve()
        }
    },
    methods: {
        init() {
            this.$emit('beforeInit')
            this.$emit('before-init')

            this.loading = true
            this.requestAnimationFrame(() => {
                this.isInit = true
                this.$emit('init')
            })
        },
        handlerIntersection(entries) {
            if (entries[0].isIntersecting || entries[0].intersectionRatio) {
                this.init()
                this.unobserve()
            }
        },
        unobserve() {
            this.observer.unobserve(this.$el)
        },
        requestAnimationFrame(callback) {
            setTimeout(() => {
                if (this.isInit) return

                callback()
            }, this.maxWaitingTime)

            return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || ((callback) => setTimeout(callback, 1000 / 60)))(callback)
        }
    }
}
</script>

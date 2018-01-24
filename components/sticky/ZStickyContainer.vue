<template>
    <div @touchstart="notifySubscribe" @touchmove="notifySubscribe" @touchend="notifySubscribe" @scroll="notifySubscribe">
        <slot></slot>
    </div>
</template>
<script>
import throttle from 'lodash.throttle'
// import { Emitter } from '@/mixins/emitter'

const events = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load']
const prefix = 'z-sticky-container'
// const events = ['touchend']
function noop() { }
export default {
    name: `${prefix}`,
    componentName: `${prefix}`,
    data() {
        return {
            fn: noop,
            subscribes: [],
            pending: false
        }
    },
    methods: {
        subscribe(handler) {
            this.subscribes = this.subscribes.concat(handler)
            console.log(this.subscribes)
        },
        unsubscribe(handler) {
            this.subscribes = this.subscribes.filter(current => current !== handler)
        },
        notifySubscribe(evt) {
            if (!this.pending) {
                const { currentTarget } = evt

                requestAnimationFrame(() => {
                    this.pending = false
                    const { top, bottom } = this.$el.getBoundingClientRect()
                    this.subscribes.forEach(handler => {
                        handler({
                            distanceFromTop: top,
                            distanceFromBottom: bottom,
                            eventSource: currentTarget === window ? document.body : this.$el
                        })
                    })
                })

                this.pending = true
            }
        }
    },
    created() {
        // console.log('-----container-created')
        // this.$on('sticky-container', this.subscribe)
        this.$on('sticky-register', this.subscribe)
    },
    mounted() {
        // this.$on('register', this.subscribe)
        this.fn = throttle(this.notifySubscribe, 250)
        events.forEach(event => window.addEventListener(event, this.fn))
    },
    beforeDestroy() {
        this.$off('sticky-register', this.subscribe)
        events.forEach(event => window.removeEventListener(event, this.fn))
    }
}
</script>

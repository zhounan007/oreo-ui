<template>
    <div @touchstart="notifySubscribe" @touchmove="notifySubscribe" @touchend="notifySubscribe" @scroll="notifySubscribe">
        <slot></slot>
    </div>
</template>
<script>
import _ from 'lodash'
const events = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load']
// const events = ['touchend']
export default {
    name: 'z-sticky-container',
    data() {
        return {
            subscribes: [],
            pending: false
        }
    },
    methods: {
        subscribe(handler) {
            this.subscribes = this.subscribes.concat(handler)
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
    mounted() {
        events.forEach(event => window.addEventListener(event, _.throttle(this.notifySubscribe), 350))
    },
    beforeDestroy() {
        events.forEach(event => window.removeEventListener(event, this.notifySubscribe))
    }
}
</script>

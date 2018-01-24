<template>
    <div>
        <div ref="placeholder" :style="placeholderStyle"></div>
        <slot :isSticky="isSticky" :stickyStyle="stickyStyle"></slot>
        <!-- <slot></slot> -->
    </div>
</template>
<script>
import Emitter from '@/mixins/emitter'
const prefix = 'z-sticky'
export default {
    name: `${prefix}`,
    componentName: `${prefix}`,
    mixins: [Emitter],
    data() {
        return {
            isSticky: false,
            wasSticky: false,
            calculatedHeight: 0,
            stickyTop: 0
        }
    },
    props: {
        topOffset: {
            type: Number,
            default: 0
        },
        bottomOffset: {
            type: Number,
            default: 0
        }
    },
    computed: {
        stickyStyle() {
            const style = {
                'transform': 'translateZ(0)',
                'webkitTransform': 'translateZ(0)'
            }
            if (this.isSticky) {
                style['position'] = 'fixed'
                style['top'] = `${this.stickyTop}px`
                style['left'] = '0px'
                style['width'] = '100%'
                style['zIndex'] = 100
            }
            return style
        },
        placeholderStyle() {
            const style = {}
            if (this.isSticky) {
                style.paddingBottom = `${this.calculatedHeight}px`
            } else {
                style.paddingBottom = '0px'
            }
            return style
        }
    },
    watch: {
        // isSticky: {
        //     deep: true,
        //     handler: (val, oldVal) => {
        //         console.warn('-----------watch--------')
        //     }
        // }
    },
    methods: {
        handlerContainerEvent({ distanceFromTop, distanceFromBottom, eventSource }) {
            console.log(`distanceFromTop:${distanceFromTop},distanceFromBottom:${distanceFromBottom},eventSource:${eventSource}`)
            // const placeholderClientReact = this.$refs.placeholder.getBoundingClientRect()
            const container = this.$parent.$el

            const stickyClientReact = this.$el.getBoundingClientRect()
            const calculatedHeight = stickyClientReact.height
            const bottomDifference = distanceFromBottom - this.bottomOffset - calculatedHeight

            this.wasSticky = !!this.isSticky
            this.isSticky = (distanceFromTop <= -this.topOffset) && (distanceFromBottom > -this.bottomOffset)

            distanceFromBottom = distanceFromBottom - calculatedHeight

            this.calculatedHeight = calculatedHeight
            this.stickyTop = bottomDifference > 0 ? 0 : bottomDifference
        }
    },
    created() {
    },
    mounted() {
        console.log('-----mounted')
        // this.$emit('sticky-container', this.handlerContainerEvent)
        this.dispatch('z-sticky-container', 'sticky-register', this.handlerContainerEvent)
        // Event.$emit('sticky-container', this.handlerContainerEvent)
        //  if (!this.$parent.subscribe) throw new TypeError(`Expected ${prefix} to bo mounted within ${prefix}-container`)
        //  this.$parent.subscribe(this.handlerContainerEvent)
    },
    beforeUpdate() {
        console.log('-----beforeUpdate')
        // this.$refs.placeholder.style.paddingBottom = `${this.isSticky ? this.calculatedHeight : 0}px`
    },
    // this.$refs.placeholder.style.paddingBottom
    beforeDestroy() {
    }
}
</script>

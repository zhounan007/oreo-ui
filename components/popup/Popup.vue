<template>
    <transition :name="popupTransition">
        <div  :class="b([position,{fullscreen}])"  v-show="value">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
import Mask from 'oreo-ui/components/mixins/mask'
const prefixCls = 'oreo-popup'
export default createBasic({
  name: 'popup',
  mixins: [Mask],

  props: {
    overlay: {
      type: Boolean,
      default: true
    },
    closeOverlayByClick: {
      type: Boolean,
      default: true
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    transition: String,
    position: {
      type: String,
      default: ''
    },
    getContainer: {
      type: Function,
      default: () => document.body
    }
  },
  computed: {
    popupTransition() {
      return this.transition || (this.position === '' ? 'oreo-fade' : `oreo-popup-slide_${this.position}`)
    }
  },
  mounted() {
    console.log('popup - mounted:')
    window.addEventListener('hashchange', this.close)
  },
  beforeDestroy() {
    console.log('popup - beforeDestroy:')
    window.removeEventListener('hashchange', this.close)
  }
})
</script>

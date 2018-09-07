<template>
    <transition :name="popupTransition">
        <div  :class="b([position,{fullscreen}])"  v-show="value">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
import createBasic from '../utils/create-basic'
import Mask from '../mixins/mask'
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
    // overlayValue() {
    //   console.log('=======================')
    //   this.fullscreen ? this.overlay = false : this.overlay = true;
    //   return !this.fullscreen
    // },
    popupTransition() {
      return this.transition || (this.position === '' ? 'oreo-fade' : `oreo-popup-slide_${this.position}`)
    }
    // classNames() {
    //     return {
    //         [`${prefixCls}`]: true,
    //         [`${prefixCls}_${this.position}`]: !!this.position,
    //         [`${prefixCls}_fullscreen`]: this.fullscreen

    //     }
    // }
  }
})
</script>
<style lang="less">
@keyframes oreo-fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes oreo-fade-out {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.oreo-fade {
  &-enter-active {
    animation: oreo-fade-in 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  }
  &-leave-active {
    animation: oreo-fade-out 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  }
}

@keyframes oreo-zoom-in {
  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}
@keyframes oreo-zoom-out {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}
.oreo-zoom {
  &-enter-active {
    animation: oreo-zoom-in 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  }
  &-leave-active {
    animation: oreo-zoom-out 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  }
}

@popupPrefixCls: oreo-popup;
.@{popupPrefixCls} {
  position: absolute;
  background: #fff; // top: 50%;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  transition: all 0.4s cubic-bezier(0.55, 0, 0.1, 1);
  max-height: 100%;
  &_top {
    width: 100%;
    max-height: 80vh;
    height: auto;
    overflow: auto;
    top: 0;
    left: 0;
    transform: translate3d(0, 0, 0);
  }
  &_right {
    top: 0;
    right: 0;
    left: auto;
    bottom: 0;
    height: 100%;
    overflow: auto;
    max-width: 90vw;
    transform: translate3d(0, 0, 0);
  }
  &_bottom {
    width: 100%;
    max-height: 80vh;
    height: auto;
    overflow: auto;
    bottom: 0;
    left: 0;
    top: auto;
    transform: translate3d(0, 0, 0);
  }
  &_left {
    top: 0;
    right: auto;
    left: 0;
    bottom: 0;
    height: 100%;
    overflow: auto;
    max-width: 90vw;
    transform: translate3d(0, 0, 0);
  }
  &_fullscreen {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: none;
    background: #fff;
  }
}

.@{popupPrefixCls}-slide_top {
  &-enter,
  &-leave-active {
    transform: translate3d(0, -100%, 0);
  }
}
.@{popupPrefixCls}-slide_bottom {
  &-enter,
  &-leave-active {
    transform: translate3d(0, 100%, 0);
  }
}
.@{popupPrefixCls}-slide_left {
  &-enter,
  &-leave-active {
    transform: translate3d(-100%, 0, 0);
  }
}
.@{popupPrefixCls}-slide_right {
  &-enter,
  &-leave-active {
    transform: translate3d(100%, 0, 0);
  }
}
</style>


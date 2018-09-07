<template>
  <div class="oreo-infinite-scroll">
      <slot></slot>
      <div class="oreo-infinite-scroll-preloader" v-show="value">
          <slot name="loading">
              <div class="oreo-pull-refresh-loading">
                  <span class=" oreo-loading-sm oreo-loading-dark"> </span>
                  <span>{{loadingText}}</span>
                </div>
          </slot>
      </div>
  </div>
</template>
<script>
import scrollUtils from '../utils/scroll'
import { on, off } from '../utils/event';
const prefix = 'oreo-infinite-scroll'
export default {
    name: 'z-infinite-scroll',
    data() {
        return {

        }
    },
    props: {
        value: {
            type: Boolean,
            default: false,
            required: true
        },
        disabled: Boolean,
        distance: {
            type: Number,
            default: 50
        },
        immediateCheck: {
            type: Boolean,
            default: true
        },
        loadingText: {
            type: String,
            default: '正在加载中...'
        }
    },
    computed: {

    },
    watch: {
        value(val) {
            this.$nextTick(this.handleScroll);
        },
        disabled(val) {
            this.$nextTick(this.handleScroll);
        }
    },
    mounted() {
        this.scroller = scrollUtils.getScrollEventTarget(this.$el)
        this.bindEvent()
        if (this.immediateCheck) {
            this.$nextTick(this.handleScroll)
        }
    },
    destroyed() {
        this.unbindEvent()
    },
    activated() {
        this.bindEvent()
    },
    deactivated() {
        this.unbindEvent()
    },
    methods: {
        bindEvent() {
            on(this.scroller, 'scroll', this.handleScroll)
        },
        unbindEvent() {
            off(this.scroller, 'scroll', this.handleScroll)
        },
        handleScroll() {
            // 加载 或者 不可用 状态
            if (this.value || this.disabled) {
                return;
            }

            const el = this.$el
            const { scroller } = this

            const scrollerHeight = scrollUtils.getVisibleHeight(scroller)

            // 可视区域不存在 或者 当前组件 为 隐藏状态
            if (!scrollerHeight || scrollUtils.getComputedStyle(el).display === 'none') {
                return
            }

            const scrollTop = scrollUtils.getScrollTop(scroller)
            const targetBottom = scrollTop + scrollerHeight

            let trigger = false

            if (el === scroller) {
                trigger = scroller.scrollerHeight - targetBottom < this.distance
            } else {
                // el 相对scroller 的距离 +  el 可视化的距离
                const elBottom =
                    scrollUtils.getElementTop(el) -
                    scrollUtils.getElementTop(scroller) +
                    scrollUtils.getVisibleHeight(el)
                trigger = elBottom - scrollerHeight < this.distance
            }
            if (trigger) {
                this.$emit('input', true)
                this.$emit('load')
            }
        }
    }

}
</script>
<style lang="less">
@prefix: oreo-infinite-scroll;

.@{prefix} {
  position: relative;
  &-preloader {
    text-align: center;
    padding: 0.3rem;
    position: relative;
  }
}
</style>


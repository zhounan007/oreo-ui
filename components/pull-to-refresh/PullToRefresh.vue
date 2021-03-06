<template>
  <div :class="b()" >
      <div :class="b('track')"
        :style="pullStyle"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
          <div :class="b('head')">
              <slot name="normal" v-if="status==='normal'"></slot>
              <slot name="pulling" v-if="status==='pulling'">
                    <oreo-icon name="arrow-down"></oreo-icon>
                    <span :class="b('text')">{{pullingText}}</span>
              </slot>
              <slot name="loosing" v-if="status==='loosing'">
                    <oreo-icon name="arrow-up"></oreo-icon>
                    <span :class="b('text')">{{loosingText}}</span>
              </slot>
              <slot name="loading" v-if="status==='loading'">
                    <oreo-preloader type="spinner" size="24px"></oreo-preloader>
                    <span :class="b('text')">{{loadingText}}</span>
              </slot>
          </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
import scrollUtils from 'oreo-ui/components/utils/scroll'
import Touch from 'oreo-ui/components/mixins/touch'
import OreoIcon from 'oreo-ui/components/icon'
import OreoPreloader from 'oreo-ui/components/preloader'
import { t } from 'oreo-ui/components/locale'
export default createBasic({
  name: 'pull-to-refresh',
  mixins: [Touch],
  components: {
    OreoIcon,
    OreoPreloader
  },
  data() {
    return {
      status: 'normal',
      height: 0,
      duration: 0
    }
  },
  props: {
    pullingText: {
      type: String,
      default: () => {
        return t('oreo.pullToRefresh.pullingText')
      }
    },
    loosingText: {
      type: String,
      default: () => {
        return t('oreo.pullToRefresh.loosingText')
      }
    },
    loadingText: {
      type: String,
      default: () => {
        return t('oreo.pullToRefresh.loadingText')
      }
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 44
    },
    value: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  computed: {
    pullStyle() {
      return {
        transition: `${this.duration}ms`,
        transform: `translate3d(0,${this.height}px,0)`
      }
    }
  },
  watch: {
    value(val) {
      this.duration = this.animationDuration
      this.getStatus(val ? this.headHeight : 0, val)
    }
  },
  mounted() {
    this.scrollEl = scrollUtils.getScrollEventTarget(this.$el)
  },
  methods: {
    getCeiling() {
      this.ceiling = scrollUtils.getScrollTop(this.scrollEl) === 0
      return this.ceiling
    },
    onTouchStart(event) {
      if (this.status === 'loading') {
        return
      }
      if (this.getCeiling()) {
        this.duration = 0
        this.touchStart(event)
      }
    },
    onTouchMove(event) {
      if (this.status === 'loading') {
        return
      }
      this.touchMove(event)
      // 距离顶部有高度
      if (!this.ceiling && this.getCeiling()) {
        this.duration = 0
        this.startY = event.touches[0].clientY
        this.deltaY = 0
      }

      if (this.ceiling && this.deltaY >= 0) {
        if (this.direction === 'vertical') {
          this.getStatus(this.ease(this.deltaY));
          event.preventDefault();
        }
      }
    },
    onTouchEnd(event) {
      if (this.status === 'loading') {
        return
      }
      if (this.ceiling && this.deltaY) {
        this.duration = this.animationDuration;
        if (this.status === 'loosing') {
          this.getStatus(this.headHeight, true);
          this.$emit('input', true);
          this.$emit('refresh');
        } else {
          this.getStatus(10);
        }
      }
    },
    ease(height) {
      const { headHeight } = this;
      return height < headHeight
        ? height
        : height < headHeight * 2
          ? Math.round(headHeight + (height - headHeight) / 2)
          : Math.round(headHeight * 1.5 + (height - headHeight * 2) / 4);
    },
    getStatus(height, isLoading) {
      this.height = height

      const status = isLoading ? 'loading' : height === 0
        ? 'normal' : height < this.headHeight
          ? 'pulling' : 'loosing'

      if (status !== this.status) {
        this.status = status
      }
      if (status === 'normal') {
        this.$el.scrollTop = 0
      }
      console.log(this.status)
    }
  }
})
</script>

<template>
  <div class="oreo-pull-refresh">
      <div class="oreo-pull-refresh-track" 
        :style="pullStyle"
        @touchstart="onTouchStart"
        @touchmove="onTouchMove"
        @touchend="onTouchEnd"
        @touchcancel="onTouchEnd"
      >
          <div class="oreo-pull-refresh-head">
              <slot name="normal" v-if="status==='normal'"></slot>
              <slot name="pulling" v-if="status==='pulling'">
                  <span class="oreo-pull-refresh-text">{{pullingText}}</span>
              </slot>
              <slot name="loosing" v-if="status==='loosing'">
                <span class="oreo-pull-refresh-text">{{loosingText}}</span>
              </slot>
              <slot name="loading" v-if="status==='loading'">
                <div class="oreo-pull-refresh-loading">
                  <span class=" oreo-loading-sm oreo-loading-dark"> </span>
                  <span>{{loadingText}}</span>
                </div>
              </slot>
          </div>
          <slot></slot>
      </div>
      
  </div>
</template>
<script>
import scrollUtils from '../utils/scroll'
import Touch from '../mixins/touch'
export default {
  name: 'z-pull-to-refresh',
  mixins: [Touch],
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
      default: '下拉刷新'
    },
    loosingText: {
      type: String,
      default: '释放更新'
    },
    loadingText: {
      type: String,
      default: '正在努力加载...'
    },
    animationDuration: {
      type: Number,
      default: 300
    },
    headHeight: {
      type: Number,
      default: 100
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
          this.getStatus(0);
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
        this.$el.scrollTo(0, 0)
        console.log('scrollTo:0,0')
      }
      console.log(this.status)
    }
  }
}
</script>
<style lang="less">
@prefix: oreo-pull-refresh;

.@{prefix} {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  overflow: auto;
  background: #fff;
  user-select: none;
}
.@{prefix}-track {
  position: relative;
}
.@{prefix}-head {
  width: 100%;
  height: 100px;
  line-height: 100px;
  left: 0;
  overflow: hidden;
  position: absolute;
  text-align: center;
  top: -100px;
  font-size: 28px;
}
.@{prefix}-text {
  display: block;
}
.@{prefix}-loading {
  display: inline-block;
  vertical-align: middle;
}
</style>


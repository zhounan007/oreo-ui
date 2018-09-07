<template>
  <div :class="b()" :style="style">
      <span :class="b([type,theme])" v-if="type==='circle'" >
        <svg  viewBox="25 25 50 50">
            <circle cx="50" cy="50" r="20" fill="none"/>
        </svg>
      </span>
      <span :class="b([type,theme])" v-if="type==='spinner'">
      </span>
  </div>
</template>
<script>
import createBasic from '../utils/create-basic'
const prefixCls = 'oreo-preloader'
export default createBasic({
  name: 'preloader',
  props: {
    type: {
      type: String,
      default: 'circle'
    },
    size: String,
    theme: {
      type: String,
      default: 'dark'
    }
  },
  computed: {
    style() {
      return this.size ? {
        width: this.size,
        height: this.size
      } : {}
    },
    themeClassNames() {
      return [`${prefixCls}_${this.type}`, `${prefixCls}_${this.theme}`]
    }

  }
})
</script>
<style lang="less">
@preloaderPrefixCls: oreo-preloader;
.@{preloaderPrefixCls} {
  width: 0.6rem;
  height: 0.6rem;
  position: relative;
  display: inline-block;

  &_circle {
    width: 100%;
    height: 100%;
    display: inline-block;

    animation: preloader-rotate 3s linear infinite;
    circle {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: 0;
      stroke-width: 3;
      stroke: #c9c9c9;
      stroke-linecap: round;

      animation: preloader-circle 1.5s ease-in-out infinite;
    }
    &.@{preloaderPrefixCls}_light {
      circle {
        stroke: #fff;
      }
    }
    &.@{preloaderPrefixCls}_primary {
      circle {
        stroke: #108ee9;
      }
    }
  }
  &_spinner {
    width: 100%;
    height: 100%;
    display: inline-block;

    .svg-background-spinner("dark");
    animation: preloader-spinner 1s steps(12, end) infinite;
    &.@{preloaderPrefixCls}_light {
      .svg-background-spinner("light");
    }
  }
}
@keyframes preloader-spinner {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes preloader-rotate {
  to {
    transform: rotate(1turn);
  }
}
@keyframes preloader-circle {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120;
  }
}

@svg-spinner-dark: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><line id="l" x1="60" x2="60" y1="7" y2="27" stroke="#c9c9c9" stroke-width="11" stroke-linecap="round"/></defs><g><use xlink:href="#l" opacity=".27"/><use xlink:href="#l" opacity=".27" transform="rotate(30 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(60 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(90 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(120 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(150 60,60)"/><use xlink:href="#l" opacity=".37" transform="rotate(180 60,60)"/><use xlink:href="#l" opacity=".46" transform="rotate(210 60,60)"/><use xlink:href="#l" opacity=".56" transform="rotate(240 60,60)"/><use xlink:href="#l" opacity=".66" transform="rotate(270 60,60)"/><use xlink:href="#l" opacity=".75" transform="rotate(300 60,60)"/><use xlink:href="#l" opacity=".85" transform="rotate(330 60,60)"/></g></svg>';
@svg-spinner-light: '<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><line id="l" x1="60" x2="60" y1="7" y2="27" stroke="#fff" stroke-width="11" stroke-linecap="round"/></defs><g><use xlink:href="#l" opacity=".27"/><use xlink:href="#l" opacity=".27" transform="rotate(30 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(60 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(90 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(120 60,60)"/><use xlink:href="#l" opacity=".27" transform="rotate(150 60,60)"/><use xlink:href="#l" opacity=".37" transform="rotate(180 60,60)"/><use xlink:href="#l" opacity=".46" transform="rotate(210 60,60)"/><use xlink:href="#l" opacity=".56" transform="rotate(240 60,60)"/><use xlink:href="#l" opacity=".66" transform="rotate(270 60,60)"/><use xlink:href="#l" opacity=".75" transform="rotate(300 60,60)"/><use xlink:href="#l" opacity=".85" transform="rotate(330 60,60)"/></g></svg>';

.svg-background-i(@svg) {
  @url: `encodeURIComponent(@{svg}) `;
  background-image: url("data:image/svg+xml;charset=utf-8,@{url}");
}

.svg-background-spinner(@theme) when (@theme ="light") {
  .svg-background-i(@svg-spinner-light);
}
.svg-background-spinner(@theme) when (@theme ="dark") {
  .svg-background-i(@svg-spinner-dark);
}
</style>

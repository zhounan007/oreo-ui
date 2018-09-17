<template>
  <div :class="className">
    <div :class="classNameLine">
      <div :class="classNameContent">
        <div :class="classNameTitle" :style="isCheck">{{title}}</div>
        <div :class="classNameBrief" :style="isCheck">{{brief}}</div>
        <div :class="classNameInfo">
          <slot name="info">
            <div :class="classNameTag">
              <!-- <z-tag :type="type" :text="info" size="small"></z-tag> -->
              <span :class="zTagClass">{{info}}</span>
              <span class="desc">{{source}}</span>
              <span class="desc">{{num}}</span>
              <span class="desc">{{date}}</span>
            </div>
          </slot>
          <slot name="delete">
            <div>X</div>
          </slot>
        </div>
      </div>
    </div>
    <div :class="classNameThumb" :style="imgSize">
      <img :src="img" alt="" onerror='javascript:this.src="http://channeltest.17wanxiao.com:8081/test/bg_loading.png"'>
    </div>
  </div>
</template>
<script>
import { ZTag } from '../badge'
const prefixCls = 'oreo-list-item'
export default {
  name: 'z-news-card',
  components: {
    ZTag
  },
  props: {
    title: String,
    img: String,
    brief: String,
    source: String,
    num: [String, Number],
    date: String,
    type: String,
    info: String,
    imgSize: {
      type: Object,
      default: function () {
        return {
          'width': '2.28rem',
          'height': '1.5rem',
          'margin-left': '0.07rem'
        }
      }
    },
    check: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-search`]: true
      }
    },
    classNameLine() {
      return {
        [`${prefixCls}-line`]: true,
        [`${prefixCls}-message`]: true
      }
    },
    classNameContent() {
      return `${prefixCls}-content`
    },
    classNameTitle() {
      return `${prefixCls}-title`
    },
    classNameBrief() {
      return `${prefixCls}-brief`
    },
    classNameInfo() {
      return `${prefixCls}-info`
    },
    classNameThumb() {
      return `${prefixCls}-thumb`
    },
    classNameTag() {
      return `${prefixCls}-info-tag`
    },
    isCheck() {
      if (this.check) {
        return {
          'color': '#777777'
        }
      }
    },
    zTagClass() {
      return {
        'tag': true,
        [`tag-color-${this.type}`]: true
      }
    }
  }
}
</script>
<style lang="less" scoped>
.oreo-list-item-info-tag {
  width: 92%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  span {
    font-size: 0.22rem;
    margin-right: 0.1rem;
  }
}
.oroe-list-item-check {
  color: #777777;
}
.oreo-list-item.oreo-list-item-search
  .oreo-list-item-line
  .oreo-list-item-content {
  font-size: 0;
  // position: relative;
  // display: inline-block;
}
// .oreo-list-item.oreo-list-item-search
//   .oreo-list-item-line.oreo-list-item-message
//   .oreo-list-item-info {
//   position: absolute;
//   bottom: -0.12rem;
//   left: 0;
// }
.oreo-list-item.oreo-list-item-search
  .oreo-list-item-line
  .oreo-list-item-content
  .oreo-list-item-brief {
  // min-height: 0.1rem;
  // line-height: 0.3rem;
  color: #222222;
  font-size: 0.24rem;
  // margin-top: 0.1rem;
}
.tag {
  // width: 0.56rem;
  // height: 0.28rem;
  // line-height: 0.28rem;
  // border-radius: 6px;
  font-size: 0.22rem;
  // padding: 5px 8px 5px 0;
}
.tag-color-blue {
  color: #2075f4;
}
.tag-color-red {
  color: #f64f4f;
}
.tag-color-green {
  color: #52ba0d;
}
.tag-color-purple {
  color: purple;
}
.tag-color-orange {
  color: orange;
}
</style>

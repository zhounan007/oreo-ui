<template>
  <div :class="className">
    <div :class="classNameLine">
      <div :class="classNameContent">
        <div :class="classNameTitle" :style="titleStyle">{{title}}</div>
        <div :class="classNameBrief" :style="briefStyle">{{brief}}</div>
        <div :class="classNameInfo">
          <slot name="info">
            <div :class="classNameTag">
              <z-tag :type="type" :text="info" :size="tagSize"></z-tag>
              <span>{{source}}</span>
              <span>{{num}}</span>
              <span>{{date}}</span>
            </div>
          </slot>
          <slot name="delete">
            <div>X</div>
          </slot>
        </div>
      </div>
    </div>
    <div :class="classNameThumb" :style="imgSize">
      <img :src="img" alt="">
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
    titleStyle: {
      type: Object,
      default: function () {
        return {
          'font-size': '.36rem',
          // 'margin-bottom': '.1rem'
        }
      }
    },
    imgSize: {
      type: Object,
      default: function () {
        return {
          'width': '2.26rem',
          'height': '1.48rem'
        }
      }
    },
    briefStyle: {
      type: Object,
      default: function () {
        return {
          'color': '#000000'
        }
      }
    },
    tagSize: {
      type: String,
      default: 'small'
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
    }
  }
}
</script>
<style lang="less" scoped>
.oreo-list-item-info-tag {
  width: 92%;
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  align-items: center;
  span {
    margin-left: 0.1rem;
  }
}
.oroe-list-item-check {
  color: #777777;
}
</style>

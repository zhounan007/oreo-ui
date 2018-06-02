<template>
    <div :class="className">
        <div :class="classNameLine">
            <div :class="classNameContent">
                <div :class="classNameTitle" :style="isCheck">{{title}}</div>
                <div :class="classNameBrief" :style="isCheck">{{brief}}</div>
            </div>
            <div :class="classNameThumb" :style="imgSize">
                <img v-for="(item, index) in img " :key="index" :src="item" alt="" onerror='javascript:this.src="http://channeltest.17wanxiao.com:8081/test/bg_loading.png"'>
            </div>
            <div :class="classNameInfo">
                <slot name="info">
                    <div :class="classNameTag">
                        <!-- <z-tag :type="type" size="tagSize" :text="info"></z-tag> -->
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
</template>
<script>
// import { ZTag, ZTagGroup } from '../tag'
import { ZTag } from '../badge'
const prefixCls = 'oreo-list-item'
export default {
    name: 'z-multiImg-card',
    components: {
        ZTag
    },
    props: {
        title: {
            type: String,
            default: '包含各类常用的`CSS`样式, 简单、方便、谁用谁知道😱...啦啦啦啦啦啦啦'
        },
        img: {
            type: Array,
            default: ['http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg']
        },
        brief: String,
        type: String,
        source: String,
        num: String,
        date: String,
        info: String,
        imgSize: {
            type: Object,
            default: function () {
                return {
                    'width': '2.28rem',
                    'height': '1.5rem'
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
        classNameThumb() {
            return `${prefixCls}-thumb`
        },
        classNameInfo() {
            return `${prefixCls}-info`
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
  .desc {
    font-size: 0.22rem;
    margin-left: 0.1rem;
  }
}
.oreo-list-item.oreo-list-item-search
  .oreo-list-item-line
  .oreo-list-item-content
  .oreo-list-item-brief {
  height: 0.3rem;
  line-height: 0.3rem;
  color: #222222;
  //   margin: 0.12rem 0;
}
.tag {
//   width: 0.56rem;
//   height: 0.28rem;
//   line-height: 0.28rem;
//   border-radius: 6px;
  font-size: 0.22rem;
//   padding: 5px 8px 5px 0;
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

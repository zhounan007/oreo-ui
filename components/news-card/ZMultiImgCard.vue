<template>
    <div :class="className">
        <div :class="classNameLine">
            <div :class="classNameContent">
                <div :class="classNameTitle" :style="titleStyle">{{title}}</div>
                <div :class="classNameBrief" :style="briefStyle">{{brief}}</div>
            </div>
            <div :class="classNameThumb" :style="imgSize">
                <img v-for="(item, index) in img " :key="index" :src="item" alt="">
            </div>
            <div :class="classNameInfo">
                <slot name="info">
                    <div :class="classNameTag">
                        <z-tag :type="type" size="small" :text="info"></z-tag>
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
                    'width': '2.26rem',
                    'height': '1.48rem'
                }
            }
        },
        titleStyle: {
            type: Object,
            default: function () {
                return {
                    'font-size': '.36rem'
                    // 'margin-bottom': '.1rem'
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
        }
    }
}
</script>
<style lang="less" scoped>
.oreo-list-item-info-tag {
  width: 92%;
  //   display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  //   align-items: center;
  span {
    margin-left: 0.1rem;
  }
}
</style>

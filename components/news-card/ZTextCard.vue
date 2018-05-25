<template>
    <div :class="className">
        <div :class="classNameLine">
            <div :class="classNameContent">
                <div :class="classNameTitle" :style="titleStyle">{{title}}</div>
                <div :class="classNameBrief">{{brief}}</div>
                <div :class="classNameInfo">
                    <slot name="info">
                        <div :class="classNameTag">
                            <z-tag :type="type" :text="info" size="small"></z-tag>
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
    </div>
</template>
<script>
// import { ZTag, ZTagGroup } from '../tag'
import { ZTag } from '../badge'
const prefixCls = 'oreo-list-item'
export default {
    name: 'z-text-card',
    components: {
        ZTag
    },
    props: {
        title: {
            type: String,
            default: '包含各类常用的`CSS`样式, 简单、方便、谁用谁知道😱...啦啦啦啦啦啦啦'
        },
        brief: String,
        type: String,
        info: String,
        source: String,
        num: [String, Number],
        date: String,
        titleStyle: {
            type: Object,
            default: function () {
                return {
                    'font-size': '.36rem',
                    // 'margin-bottom': '.1rem'
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

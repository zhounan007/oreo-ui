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
                    'font-size': '.36rem'
                    // 'margin-bottom': '.1rem'
                }
            }
        },
        check: Boolean
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
    margin-right: 0.1rem;
    font-size: 0.22rem;
  }
}
.oreo-list-item.oreo-list-item-search
  .oreo-list-item-line
  .oreo-list-item-content
  .oreo-list-item-brief {
  height: 0.3rem;
  line-height: 0.3rem;
  color: #222222;
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

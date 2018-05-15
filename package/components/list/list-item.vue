<template>
    <div :class="linkClass">
        <slot>
            <div class="oreo-list-item-thumb">
                <slot name="thumb">
                    <img :src="thumb" alt="" v-if="thumb !== void 0">
                </slot>
            </div>
            <div class="oreo-list-item-line">
                <div class="oreo-list-item-content">
                    <slot name="content">
                        <div class="oreo-list-item-title">{{title}}</div>
                        <div class="oreo-list-item-brief">{{brief}}</div>
                    </slot>
                </div>
                <div class="oreo-list-item-extra">
                    <slot name="extra">{{extra}}</slot>
                </div>
                <div class="oreo-list-arrow" v-if="link"></div>
            </div>
        </slot>
    </div>
</template>
<script>
const prefixCls = 'oreo-list-item'
export default {
    name: 'z-list-item',
    props: {
        link: {
            type: Boolean,
            default: true
        },
        multi: {
            type: Boolean,
            default: false
        },
        title: String,
        brief: String,
        thumb: String,
        extra: String
    },
    computed: {
        linkClass() {
            const self = this
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-link`]: this.link,
                [`${prefixCls}-multi`]: this.multi || this.brief !== void 0
            }
        }
    }
}
</script>

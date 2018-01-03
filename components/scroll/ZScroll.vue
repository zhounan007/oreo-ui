<template>
    <div ref="wrapper" class="oreo-scroll-wrapper">
        <div class="oreo-scroll-content">
            <slot>
                <div ref="list" class="oreo-list">
                    <div class="oreo-list-body">
                        <slot name="item" v-for="item in data" :item="item"></slot>
                    </div>
                </div>
            </slot>
            <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
                <div class="oreo-pullup-wrapper" v-if="pullUpLoad">
                    <div class="before-trigger" v-if="!isPullUpLoad">
                        <span>{{pullUpText}}</span>
                    </div>
                    <div class="after-trigger" v-else>
                        <div class=" oreo-loading oreo-loading-dark oreo-loading-sm">
                        </div>
                    </div>
                </div>
            </slot>
        </div>
        <slot name="pulldown" :pullDownRefresh="pullDownRefresh" :pullDownStyle="pullDownStyle" :beforePullDown="beforePullDown" :isPullingDown="isPullingDown">
            <div ref="pulldown" class="oreo-pulldown-wrapper refresh-theme-default" :style="pullDownStyle" v-if="pullDownRefresh">
                <div class="before-trigger" v-if="beforePullDown">
                    下拉刷新
                </div>
                <div class="after-trigger" v-else>
                    <template v-if="isPullingDown">
                        <div class=" oreo-loading oreo-loading-dark oreo-loading-sm"></div>
                        <div style="margin-left:0.1rem;">努力加载中</div>
                    </template>
                    <div v-else>
                        <span>{{refreshText}}</span>
                    </div>
                </div>
            </div>
        </slot>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import { getRect } from '@/script/dom'

const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'

export default {
    name: 'z-scroll',
    data() {
        return {
            // A
            beforePullDown: true,
            // 是否回弹
            isRebounding: false,
            // 正在下拉
            isPullingDown: false,
            // 正在上拉
            isPullUpLoad: false,
            // C
            pullUpDirty: true,
            pullDownStyle: ''

        }
    },
    props: {
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
        listenScroll: {
            type: Boolean,
            default: false
        },
        listenBeforeScroll: {
            type: Boolean,
            default: false
        },
        direction: {
            type: String,
            default: DIRECTION_V
        },
        refreshDelay: {
            type: Number,
            default: 20
        },
        // 以下属性为Better-Scroll 里面的
        probeType: {
            type: Number,
            default: 1
        },
        scrollbar: {
            type: [Object, Boolean],
            default: false
        },
        pullDownRefresh: {
            type: [Object, Boolean],
            default: false
        },
        pullUpLoad: {
            type: [Object, Boolean],
            default: false
        },
        // 置为 true，better-scroll 会派发一个 click 事件
        click: {
            type: Boolean,
            default: true
        },
        // 纵轴方向初始化位置
        startY: {
            type: Number,
            default: 0
        },
        // 支持横向和纵向同时滚动
        freeScroll: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        pullUpText() {
            const moreText = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more) || '加载更多'

            const noMoreText = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore) || '没有更多数据了'

            return this.pullUpDirty ? moreText : noMoreText
        },
        refreshText() {
            return (this.pullDownRefresh && this.pullDownRefresh.txt) || '刷新成功'
        }
    },
    created() {
        this.pullDownInitTop = -50
    },
    mounted() {
        setTimeout(() => {
            this.initScroll()
        }, 20)
    },
    watch: {
        data() {
            setTimeout(() => {
                this.forceUpdate(true)
            }, this.refreshDelay)
        }
    },
    methods: {
        initScroll() {
            if (!this.$refs.wrapper) return
            if (this.$refs.list && (this.pullDownRefresh || this.pullUpLoad)) {
                this.$refs.list.style.minHeight = (getRect(this.$refs.wrapper).height + 1) + 'px'
                // this.$refs.list.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
            }
            let option = {
                probeType: this.probeType,
                click: this.click,
                scrollY: this.freeScroll || this.direction === DIRECTION_V,
                scrollX: this.freeScroll || this.direction === DIRECTION_H,
                scrollbar: this.scrollbar,
                pullDownRefresh: this.pullDownRefresh,
                pullUpLoad: this.pullUpLoad,
                startY: this.startY,
                freeScroll: this.freeScroll
            }

            this.scroll = new BScroll(this.$refs.wrapper, option)
            if (this.listenScroll) {
                this.scroll.on('scroll', (pos) => {
                    this.$emit('scroll', pos)
                })
            }

            if (this.listenBeforeScroll) {
                this.scroll.on('beforeScrollStart', () => {
                    this.$emit('beforeScrollStart')
                })
            }
            if (this.pullDownRefresh) {
                this._initPullDownRefresh()
            }
            if (this.pullUpLoad) {
                this._initPullUpLoad()
            }
        },
        disable() {
            this.scroll && this.scroll.disable()
        },
        enable() {
            this.scroll && this.scroll.enable()
        },
        refresh() {
            this.scroll && this.scroll.refresh()
        },
        scrollTo() {
            this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
        },
        scrollToElement() {
            this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
        },
        clickItem(e, item) {
            this.$emit('click', item)
        },
        destroy() {
            this.scroll.destroy()
        },
        forceUpdate(dirty) {
            if (this.pullDownRefresh && this.isPullingDown) {
                this.isPullingDown = false
                this._reboundPullDown().then(() => {
                    this._afterPullDown()
                })
            } else if (this.pullUpLoad && this.isPullUpLoad) {
                this.isPullUpLoad = false
                this.scroll.finishPullUp()
                this.pullUpDirty = dirty
                this.refresh()
            } else {
                this.refresh()
            }
        },
        _initPullDownRefresh() {
            this.scroll.on('pullingDown', () => {
                this.beforePullDown = false
                this.isPullingDown = true
                this.$emit('pullingDown')
            })

            this.scroll.on('scroll', (pos) => {
                if (this.beforePullDown) {
                    // this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
                    this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
                } else {
                    // this.bubbleY = 0
                }

                if (this.isRebounding) {
                    this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
                }
            })
        },
        _initPullUpLoad() {
            this.scroll.on('pullingUp', () => {
                this.isPullUpLoad = true
                this.$emit('pullingUp')
            })
        },
        _reboundPullDown() {
            const { stopTime = 300 } = this.pullDownRefresh
            return new Promise((resolve) => {
                setTimeout(() => {
                    this.isRebounding = true
                    this.scroll.finishPullDown()
                    resolve()
                }, stopTime)
            })
        },
        _afterPullDown() {
            setTimeout(() => {
                this.pullDownStyle = `top:${this.pullDownInitTop}px`
                this.beforePullDown = true
                this.isRebounding = false
                this.refresh()
            }, this.scroll.options.bounceTime)
        }

    }

}
</script>
<style lang="less">
@prefixCls: oreo-scroll;

.@{prefixCls}-wrapper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
    background: #fff;

    .@{prefixCls}-content {
        position: relative;
        z-index: 3000
    }
    .oreo-pullup-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.15rem 0;
        background: pink;
        .before-trigger {}
        .after-trigger {}
    }
    .oreo-pulldown-wrapper {
        width: 100%;
        position: absolute;
        left: 0;
        display: flex;
        padding: 0.2rem;
        justify-content: center;
        align-items: center;
        transition: all;
        .before-trigger {}
        .after-trigger {
            margin-top: 0.1rem;
        }
    }
}


.refresh-theme-default {

    .before-trigger,
    .after-trigger {
        display: flex;
        flex-direction: row;

        justify-content: center;
        align-items: center;
    }
}
</style>

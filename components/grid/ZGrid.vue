<template>
    <div :class="classNames">
        <z-flex v-for="(row,index) in group" :key="index">
            <z-flex-item v-for="(item,index) in row" :key="index" class="oreo-grid-item">
                <slot name="item" :item="item"></slot>
            </z-flex-item>
            <template v-if="row.length!==column">
                <z-flex-item v-for="(n,index ) in polyfill" :key="index" class="oreo-grid-item">
                </z-flex-item>
            </template>
        </z-flex>
    </div>
</template>
<script>
import { ZFlex, ZFlexItem } from '../flex'
import { chunk, Event } from '../../src/script/utils'

const prefix = 'z-grid'
export default {
    name: `${prefix}`,
    componentName: `${prefix}`,
    components: {
        ZFlex,
        ZFlexItem
    },
    data() {
        return {
            // 对于不满一行的进行补位(防止部分border缺失)
            polyfill: []
        }
    },
    props: {
        border: Boolean,
        square: Boolean,
        data: {
            type: Array,
            default: function () {
                return []
            }
        },
        column: {
            type: Number,
            default: 3,
            validator(v) {
                return [2, 3, 4, 5].indexOf(v) >= 0
            }
        }
    },
    computed: {
        classNames() {
            return {
                'oreo-grid': true,
                'oreo-grid-line': this.border,
                'oreo-grid-square': this.square
            }
        },
        group() {
            this.polyfill = []
            let r = this.column - (this.data.length % this.column)
            let c = chunk(this.data, this.column)
            while (r > 0) {
                this.polyfill.push('')
                r--
            }
            console.log(this.polyfill.length)
            console.log(JSON.stringify(c))
            return c
        }
    },
    created() {
        this.$on('grid-item-click', this.handlerItem)
    },
    beforeDestroy() {
        this.$off('grid-item-click', this.handlerItem)
    },
    methods: {
        handlerItem(item) {
            let { index } = item
            this.$emit('click', index, item)
        }
    }
}
</script>
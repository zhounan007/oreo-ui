<template>
     <div :class="b({line,square})">
         <oreo-flex v-for="(row,index) in group" :key="`flex${index}`">
            <oreo-grid-item v-for="(item,index) in row" 
                :key="`flex-item${index}`" 
                :class="b('item')"
                :text="item.text"
                :icon="item.icon"
                @grid-item-click="handleItem(item)">
                     <slot :item="item"></slot>
            </oreo-grid-item>
             
            <template v-if="row.length!==column">
                <oreo-grid-item v-for="(n,index ) in polyfill" :key="index" :class="b('item')" >
                </oreo-grid-item>
            </template>
         </oreo-flex>
    </div>
</template>
<script>
import OreoFlex from '../flex'
import OreoGridItem from '../grid-item'

import { chunk } from '../utils'
import createBasic from '../utils/create-basic'

export default createBasic({
    name: 'grid',
    components: {
        OreoFlex,
        OreoGridItem
    },
    data() {
        return {
            // 对于不满一行的进行补位(防止部分border缺失)
            polyfill: []
        }
    },
    props: {
        line: Boolean,
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
        group() {
            this.polyfill = []
            let r = this.column - (this.data.length % this.column)
            let c = chunk(this.data, this.column)
            while (r > 0) {
                this.polyfill.push('')
                r--
            }
            // console.log(this.polyfill.length)
            // console.log(JSON.stringify(c))
            return c
        }
    },
    methods: {
        handleItem(item) {
            this.$emit('click', item)
        }
    }
})
</script>
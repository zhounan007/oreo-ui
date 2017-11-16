<template>
    <div class="oreo-grid-item-content" @click="handlerItem">
        <slot></slot>
    </div>
</template>
<script>
import { Event } from '@/script/utils'
export default {
    name: 'z-grid-item',
    props: {
        // 区分每一个
        index: String
    },
    methods: {
        handlerItem(e) {
            Event.$emit('z-grid-item-click', this, e)
        }
    }
}
</script>

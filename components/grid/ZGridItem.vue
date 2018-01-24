<template>
    <div class="oreo-grid-item-content" @click="handlerItem">
        <slot>
            <img :src="icon" alt="text" class="oreo-grid-item-icon">
            <div class="oreo-grid-item-text">{{text}}</div>
        </slot>
    </div>
</template>
<script>
import Emitter from '@/mixins/emitter'
const prefix = 'z-grid-item'
export default {
    name: `${prefix}`,
    componentName: `${prefix}`,
    mixins: [Emitter],
    props: {
        // 区分每一个
        index: [String, Number],
        icon: String,
        text: String
    },
    methods: {
        handlerItem(e) {
            this.dispatch('z-grid', 'grid-item-click', this)
        }
    }
}
</script>

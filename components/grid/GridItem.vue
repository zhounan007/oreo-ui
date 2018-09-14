<template>
    <oreo-flex-item>
        <div class="oreo-grid__content" @click="handleItem">
            <slot>
                <slot name="icon">
                    <img :src="icon" :alt="text" class="oreo-grid__icon" v-if="icon">
                </slot>
                <slot name="text">
                    <div class="oreo-grid__text" v-if="text">{{text}}</div>
                </slot>
            </slot>
        </div>
    </oreo-flex-item>
</template>
<script>
import OreoFlexItem from 'oreo-ui/components/flex-item'
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'grid-item',
    components: {
        OreoFlexItem
    },
    props: {
        // 区分每一个
        index: [String, Number],
        icon: String,
        text: String
    },
    methods: {
        handleItem(e) {
            this.$emit('grid-item-click')
        }
    }
})
</script>

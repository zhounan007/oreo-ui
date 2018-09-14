<template>
    <!-- <svg :class="classNames" @click="handlerClick">
        <use :xlink:href="link" />
    </svg> -->
    <i :class="[b(),`oreo-icon-${name}`]" :style="style" v-on="$listeners">
        <slot></slot>
    </i>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'icon',
    props: {
        name: String,
        color: String,
        size: String
    },
    computed: {
        style() {
            return {
                color: this.color,
                fontSize: this.size
            }
        }
    }
})
</script>

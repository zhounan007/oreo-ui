<template>
    <div class="oreo-tabs-panel-wrap" :class="{ 'oreo-tabs-panel-wrap-active': active }">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'z-tab-pane',
    data() {
        return {
            index: null
        }
    },
    props: {
        label: String,
        name: String,
        disabled: Boolean
    },
    computed: {
        active() {
            return this.$parent.currentName === (this.name || this.index)
        }
    },
    watch: {
        label() {
            this.$parent.$forceUpdate()
        }
    }
}
</script>

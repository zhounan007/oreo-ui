<template>
    <div :class="classNames">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'z-flex-item',
    props: {
    },
    computed: {
        classNames() {
            return {
                'oreo-flex-item': true
            }
        }
    }
}
</script>

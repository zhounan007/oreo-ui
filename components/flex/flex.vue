<template>
    <div :class="classNames">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'z-flex',
    props: {
        direction: String
    },
    computed: {
        classNames() {
            return {
                'oreo-flex': true
            }
        }
    }
}
</script>
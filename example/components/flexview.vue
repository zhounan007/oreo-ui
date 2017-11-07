<template>
    <div class="flexview" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'flexview',
    props: {
        direction: {
            type: String,
            default: 'column',
            validator(v) {
                return ['column', 'row'].indexOf(v) >= 0
            }
        }
    },
    computed: {
        classes() {
            return {
                [`${this.direction}`]: true
            }
        }
    }
}
</script>
<style lang="less">
@import '../styles/demo.less';
.flexview {
    width: 100%;
    height: 100%;
    max-width: 10rem;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    overflow: hidden;
    &.column {
        flex-direction: column;
    }
    &.row {
        flex-direction: row;
    }
}
</style>

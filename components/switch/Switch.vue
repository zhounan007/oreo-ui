<template>
    <label :class="b()">
        <input type="checkbox" :checked="active" @click="handleClick" :disabled="disabled">
        <div :class="b('box')"></div>
    </label>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'switch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        disabled: Boolean,
        size: String
    },
    computed: {
        active() {
            return !!this.value
        }
    },
    methods: {
        handleClick(e) {
            this.$emit('input', event.target.checked)
        }
    }
})
</script>

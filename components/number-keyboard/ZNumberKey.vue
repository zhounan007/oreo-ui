<template>
    <div :class="classNames" 
        v-text="text"
        @touchstart.stop.prevent="onFocus" 
        @touchend="onBlur"
        @touchcancel="onBlur"
        >
    </div>
</template>
<script>
import createBasic from '../utils/create-basic'
const prefix = 'number-keyboard'
export default createBasic({
    name: 'number-key',
    data() {
        return {
            active: false
        }
    },
    props: {
        text: [String, Number],
        type: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        classNames() {
            const types = this.type.slice(0)
            const ret = {
                [`${prefix}__key`]: true,
                [`${prefix}__key_active`]: this.active
            }
            types.forEach(key => {
                ret[`${prefix}__key_${key}`] = true
            })
            return ret
        }
    },
    methods: {
        onBlur() {
            this.active = false
        },
        onFocus() {
            this.active = true
            this.$emit('press', this.text)
        }
    }
})
</script>


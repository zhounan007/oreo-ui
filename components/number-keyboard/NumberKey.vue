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
import createBasic from 'oreo-ui/components/utils/create-basic'
const prefix = 'oreo-number-keyboard'
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
                [`${prefix}__key`]: true
            }

            types.forEach(key => {
                ret[`${prefix}__key_${key}`] = true
            })
            ret[`${prefix}__key_active`] = this.active
            return ret
        }
    },
    methods: {
        onBlur() {
            this.active = false
        },
        onFocus() {
            this.active = true
            // let text = ''
            // if (this.text !== '') {
            //     text = this.text
            // } else {
            //     text = this.type.join(',')
            // }
            this.$emit('press', this.text)
        }
    }
})
</script>


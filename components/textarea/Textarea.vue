<template>
    <div :class="b()">
        <div :class="b('control')">
            <textarea  :placeholder="placeholder"  :rows="rows" :disabled="disabled" :value="text" @input="handleInput"></textarea>
        </div>
        <span :class="b('count')" v-if="max > 0">
            <span>{{use}}</span>/{{max}}
        </span>
    </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'textarea',
    props: {
        value: {
            type: [String, Number],
            default: ''
        },
        placeholder: String,
        disabled: {
            type: Boolean,
            default: false
        },
        max: {
            type: Number,
            default: 0
        },
        rows: {
            type: [Number, String],
            default: 3
        }
    },
    computed: {
        use() {
            return this.value.length
        },
        text() {
            return this.value
        }
    },
    mounted() {
    },
    methods: {
        handleInput(e) {
            let v = event.target.value
            if (this.max > 0 && v.length > this.max) {
                v = v.substring(0, this.max)
            }
            this.$emit('input', v)
        }
    }
})
</script>

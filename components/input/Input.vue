<template>
    <div :class="b({disabled})"> 
        <div :class="b('wrap')">
            <div :class="b('label')" v-if="label">{{label}}</div>
            <div  :class="b('control')">
                <input :type="type" :placeholder="placeholder" @input="handleInput($event)" :value="value" :disabled="disabled" :class="b('field',{right:rightAlign})">
            </div>
        </div>
    </div>
    
</template>
<script>

import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'input',
    props: {
        placeholder: String,
        label: String,
        type: {
            type: String,
            validator(v) {
                return ['text', 'password'].indexOf(v) >= 0
            },
            default: 'text'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        value: {
            type: [Number, String]
        },
        rightAlign: Boolean
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value)
        }
    }
})
</script>
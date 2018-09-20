<template>
    <div v-if="dot" :class="b()">
        <slot></slot>
        <sup :class="b('dot')" v-show="badge"></sup>
    </div>
    <div v-else :class="b()">
        <slot></slot>
        <sup :class="b('text')" v-show="badge">{{finalText}}</sup>
    </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'badge',
    props: {
        dot: {
            type: Boolean,
            default: false
        },
        count: Number,
        overflowCount: {
            type: [Number, String],
            default: 99
        },
        text: {
            type: String,
            default: ''
        },
        hidden: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        finalText() {
            if (this.text !== '') return this.text
            return parseInt(this.count) >= parseInt(this.overflowCount) ? `${this.overflowCount}+` : this.count
        },
        badge() {
            let status = false
            if (this.count) {
                status = !(parseInt(this.count) === 0)
            }
            if (this.dot) {
                status = true
            }
            if (this.text !== '') {
                status = true
            }
            return status
        }
    }

})
</script>

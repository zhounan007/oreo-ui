<template>
    <div :class="b()">
        <ul :class="[b('wrap')]" @touchstart.stop="$emit('focus')"> 
            <li v-for="(s,index) in points" :key="index">
                <i :style="`visibility:${s}`"></i>
            </li>
        </ul>
        <slot>
            <div :class="b(error?'error':'info')" v-if="error || info " v-text="error || info"></div>
        </slot>
    </div>    
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'password-input',
    props: {
        error: String,
        info: String,
        value: {
            type: String,
            default: ''
        },
        length: {
            type: Number,
            default: 6
        }
    },
    computed: {
        points() {
            const arr = []
            for (let i = 0; i < this.length; i++) {
                arr[i] = this.value[i] ? 'visible' : 'hidden'
            }
            return arr
        }
    },
    methods: {

    }
})
</script>

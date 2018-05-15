<template>
    <div class="oreo-list-body" :class="{'oreo-selectBox-agree': agree}">
        <div class="oreo-list-item oreo-selectBox" :class="{'inner-right': innerRight, 'selectBox-agree': agree }" v-for="(item, index) in options" :key="index">
            <div class="oreo-selectBox-thumb">
                <input class="oreo-selectBox-thumb-inner" type="radio" :value="item.value" :name="name"
                         :disabled="item.disabled" :checked="item.checked" @click="change($event)" />
            </div>
            <label class="oreo-selectBox-label">{{item.text}}</label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'z-radio',
    props: {
        options: {
            type: Array,
            required: true
        },
        innerRight: Boolean,
        agree: Boolean,
        name: String
    },
    methods: {
        change(event) {
            // console.log(event.target.value)
            this.$emit('input', event.target.value)
        }
    }
}
</script>

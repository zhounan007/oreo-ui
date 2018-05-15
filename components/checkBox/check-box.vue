<template>
    <div class="oreo-list-body" :class="{'oreo-selectBox-agree': agree}">
        <div class="oreo-list-item oreo-selectBox" :class="{'inner-right': innerRight, 'selectBox-agree': agree}" v-for="(item,index) in options" :key="index">
            <div class="oreo-selectBox-thumb">
                <input class="oreo-selectBox-thumb-inner" type="checkbox" v-model="val" :value="item.value"
                        :disabled="item.disabled" @click="change($event)" />
            </div>
            <label class="oreo-selectBox-label" :class="{'oreo-selectBox-flex': labelLeft}">{{item.text}}</label>
        </div>
    </div>
</template>
<script>
export default {
    name: 'z-check-box',
    props: {
        innerRight: Boolean,
        labelLeft: Boolean,
        agree: Boolean,
        options: {
            type: Array,
            required: true
        },
        value: {
            type: [Array, Number],
            required: true
        }
    },
    computed: {
        val() {
            return this.value
        }
    },
    methods: {
        change(event) {
            let value = event.target.value
            let index = this.val.indexOf(value)
            if (index === -1) {
                this.val.push(value)
            } else {
                this.val.splice(index, 1)
            }
        }
    }
}
</script>

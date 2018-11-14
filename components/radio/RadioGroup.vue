<template>
  <div :class="b()">
      <slot>
          <oreo-radio v-for="(option,index) in options" 
            :key="index"
            :option="option"
            :shape="shape"
            :position="position"
            :clickable="clickable"

            v-model="radioValue"
            >
          </oreo-radio>
      </slot>
  </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
import OreoRadio from './Radio.vue'
export default createBasic({
    name: 'radio-group',
    components: {
        OreoRadio
    },
    data() {
        return {
            radioValue: this.value
        }
    },
    props: {
        value: [String, Number],
        shape: {
            type: String,
            default: 'square' // circle
        },
        position: {
            type: String,
            default: 'left' // left or  right
        },
        clickable: {
            type: Boolean,
            default: true
        },
         // {label:'',value:'',disabled:false}
        options: Array
    },
    watch: {
        value(newVal) {
            this.radioValue = newVal
        },
        radioValue(newVal) {
            this.$emit('input', newVal)
        }
    },
    mounted() {
    },
    beforeDestroy() {
    },
    methods: {

    }
})
</script>

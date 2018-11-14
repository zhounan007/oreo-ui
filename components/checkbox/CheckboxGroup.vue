<template>
  <div :class="b()">
      <slot>
          <oreo-checkbox v-for="(option,index) in options" 
            :key="index"
            :option="option"
            :shape="shape"
            :position="position"
            :clickable="clickable"
            >
          </oreo-checkbox>
      </slot>
  </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
import OreoCheckbox from './Checkbox.vue'
export default createBasic({
    name: 'checkbox-group',
    components: {
        OreoCheckbox
    },
    data() {
        return {
            _value: [],
            _checkboxGroup: true
        }
    },
    props: {
        value: Array,
        min: {
            type: Number,
            default: 0
        },
        max: {
            type: Number,
            default: Infinity
        },
        shape: {
            type: String,
            default: 'circle' // square
        },
        position: {
            type: String,
            default: 'left' // left or  right
        },
        clickable: {
            type: Boolean,
            default: true
        },
        options: Array
    },
    watch: {
        value: {
            immediate: true,
            handler(newValue, oldValue) {
                this._value = this.value.concat()
            }
        }
    },
    mounted() {
        this.bindEvent()
    },
    beforeDestroy() {
        this.unbindEvent()
    },
    methods: {
        bindEvent() {
            this.$on('checked', (v) => {
                if (this._value.length < this.max) {
                    this._value.push(v)
                }
                this.$emit('input', this._value)
            })
            this.$on('cancel-checked', (v) => {
                if (this._value.length > this.min) {
                    const index = this._value.indexOf(v)
                    this._value.splice(index, 1)
                }
                this.$emit('input', this._value)
            })
        },
        unbindEvent() {
            this.$off('checked')
            this.$off('cancel-checked')
        }
    }
})
</script>

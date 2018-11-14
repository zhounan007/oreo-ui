<template>
    <div :class="b({checked:radioValue===computedOption.value,
                    disabled:computedOption.disabled,
                    active,
                    circle:shape==='circle'
                    })" 
            @touchstart="handleFocus" 
            @touchend="handleBlur"
            @touchcancel="handleBlur"
        >
        <label  :class="b('wrap')">
            <input type="radio" :class="b('input')" v-model="radioValue" :disabled="computedOption.disabled" :value="computedOption.value">
            <i :class="['oreo-icon-check',b('icon',position)]"></i>
            <span :class="b('label')" v-if="computedOption.label || $slots.default">
                <slot>
                    {{computedOption.label}}
                </slot>
            </span>
        </label>
    </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'radio',
    data() {
        return {
            // 点击交互
            active: false,
            radioValue: this.value
        }
    },
    props: {
        value: [Number, String],
        // label: [Boolean, String],
        disabled: {
            type: Boolean,
            default: false
        },
        shape: {
            type: String,
            default: 'circle' // square circle
        },
        position: {
            type: String,
            default: 'left' // left or  right
        },
        // {label:'',value:'',disabled:false}
        option: {
            type: [String, Object],
            require: true
        },
        clickable: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        value(newVal) {
            this.radioValue = newVal
        },
        radioValue(newVal) {
            // 没有验证数据类型
            // if (typeof this.value === 'number') {
            //     newVal = Number(newVal)
            // }
            this.$emit('input', newVal)
        }
    },
    computed: {
        computedOption() {
            let option = this.option
            if (typeof option === 'string') {
                option = {
                    label: option,
                    value: option,
                    disabled: false
                }
            }
            return option
        }
    },
    mounted() {
    },
    methods: {
        handleBlur() {
            if (this.clickable) {
                this.active = false
            }
        },
        handleFocus(e) {
            if (this.clickable) {
                this.active = true
            }
        }
    }
})
</script>

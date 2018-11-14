<template>
    <div :class="b({checked,disabled:computedOption.disabled,square:shape==='square',active})" 
            @touchstart="handleFocus" 
            @touchend="handleBlur"
            @touchcancel="handleBlur"
        >
        <label  :class="b('wrap')">
            <input type="checkbox" :class="b('input')" v-model="checked" :disabled="computedOption.disabled">
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
    name: 'checkbox',
    data() {
        const parent = this.$parent
        const isInGroup = parent.$data._checkboxGroup
        return {
            isInGroup,
            // 点击交互
            active: false
        }
    },
    props: {
        value: [Boolean, String],
        label: [Boolean, String],
        disabled: {
            type: Boolean,
            default: false
        },
        shape: {
            type: String,
            default: 'circle' // square
        },
        position: {
            type: String,
            default: 'left' // left or  right
        },
        option: {
            type: [Boolean, String, Object],
            default() {
                return {
                    _def_option: true
                }
            }
        },
        clickable: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        computedOption() {
            let option = this.option
            const label = this.label
            const disabled = this.disabled
            if (option._def_option === true) {
                option = {
                    label,
                    value: label,
                    disabled
                }
            } else if (typeof option === 'string') {
                option = {
                    label: option,
                    value: option,
                    disabled: false
                }
            }
            return option
        },
        checked: {
            set(nval) {
                const value = this.computedOption.value
                const emitValue = value && nval ? value : nval
                this.$emit('input', emitValue)

                if (this.isInGroup) {
                    const parentEmitEvent = nval ? 'checked' : 'cancel-checked'
                    this.$parent.$emit(parentEmitEvent, value || nval)
                }
            },
            get() {
                if (this.isInGroup) {
                    return this.$parent.value.indexOf(this.computedOption.value) > -1
                } else {
                    return Boolean(this.value)
                }
            }
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

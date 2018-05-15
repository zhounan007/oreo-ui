<template>
    <!-- <z-list :header="header">
        <z-list-item :class="classNames" :link="false"> -->
    <div class="oreo-form-group">
        <div :class="controlClass">
            <textarea name="" id="" :placeholder="placeholder" rows="3" @input="input($event)" v-model="text"></textarea>
        </div>
        <span :class="countClass" v-show="chrVisible">
            <span>{{initialValue}}</span>/{{chrNum}}
        </span>
    </div>
    <!-- </z-list-item>
    </z-list> -->
</template>
<script>
import { ZList, ZListItem } from '../list/index'
const prefixCls = 'oreo-textarea'
export default {
    name: 'z-textarea',
    components: {
        ZList,
        ZListItem
    },
    props: {
        header: String,
        placeholder: {
            type: String
        },
        chrNum: {
            type: Number
        },
        value: {
            type: String
        }
    },
    data() {
        return {
            initialValue: 0,
            text: ''
        }
    },
    computed: {
        chrVisible() {
            return this.chrNum !== void 0
        },
        classNames() {
            return prefixCls
        },
        controlClass() {
            return `${prefixCls}-control`
        },
        countClass() {
            return `${prefixCls}-count`
        }
    },
    created() {
        if (this.value !== void 0) {
            this.initialValue = this.value.length
            this.text = this.value
        }
    },
    methods: {
        input(event) {
            if (this.chrNum !== void 0) {
                let len = event.target.value.length
                if (len >= this.chrNum) {
                    this.text = this.text.substr(0, this.chrNum)
                    this.initialValue = len - 1
                } else {
                    this.initialValue = len
                }
                this.$emit('input', event.target.value.substr(0, this.chrNum))
            } else {
                this.$emit('input', event.target.value)
            }
        }
    }
}
</script>
<style lang="less" scoped>
.oreo-form-group{
    width: 100%;
}
</style>

<template>
    <z-list :header="header">
        <z-list-item :link="false">
            <slot></slot>
        </z-list-item>
    </z-list>
</template>
<script>
import { ZList, ZListItem } from '../list'
const prefixCls = 'oreo-input'
export default {
    name: 'z-form-group',
    component: {
        ZList,
        ZListItem
    },
    props: {
        header: String,
        disabled: {
            type: Boolean,
            default: false
        },
        link: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        disabledClass() {
            return {
                [`${prefixCls}`]: true,
                [`${prefixCls}-disabled`]: this.disabled
            }
        }
    }
}
</script>

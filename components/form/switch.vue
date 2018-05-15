<template>
    <z-list :header="header">
        <z-list-item :link="false">
            <!-- <div class="oroe-form-group"> -->
                <template slot="content">{{text}}</template>
                
                <label slot="extra" class="oreo-switch">
                    <input type="checkbox" :disabled="disabled" :checked="checked" @click="onToggle($event)">
                    <div class="oreo-switch-box"></div>
                </label>
            <!-- </div> -->
        </z-list-item>
    </z-list>
</template>
<script>
import { ZList, ZListItem } from '../list/index'
export default {
    name: 'z-switch',
    components: {
        ZList,
        ZListItem
    },
    props: {
        header: String,
        text: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        checked: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onToggle(event) {
            this.$emit('input', event.target.checked)
        }
    }
}
</script>

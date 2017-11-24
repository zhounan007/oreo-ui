<template>
    <z-list>
        <z-list-item>
            <template slot="content">{{text}}</template>
            <label slot="extra" class="oreo-switch">
                <input type="checkbox" :disabled="disabled" :checked="checked">
                <div class="oreo-switch-box"></div>
            </label>
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
    }
}
</script>

<template>
    <transition name="oreo-fade">
    <div :class="b()" v-show="value">
        <div :class="b('text',[type?mode:''])" >
            <oreo-preloader v-if="type === 'loading'" theme="light" :type="loadingType"></oreo-preloader>
            <oreo-icon v-else :class="b('icon')" :name="type" v-show="type"></oreo-icon>
            <div :class="b('msg')">
                {{message}}
            </div>
        </div>
    </div>
    </transition>
</template>
<script>
import createBasic from '../utils/create-basic'
import OreoPreloader from '../preloader'
import OreoIcon from '../icon'
import Mask from '../mixins/mask'
const prefixCls = 'oreo-toast'
export default createBasic({
    name: 'toast',
    mixins: [Mask],
    components: {
        OreoPreloader,
        OreoIcon
    },
    props: {
        duration: {
            type: Number,
            default: 2 * 1000
        },
        message: {
            type: String
        },
        type: { // success failure loading
            type: String,
            default: ''
        },
        mode: {
            type: String,
            default: 'vertical'
        },
        loadingType: {
            type: String,
            default: 'circle'
        }
    },
    computed: {
    },
    watch: {},
    methods: {
    }

})
</script>
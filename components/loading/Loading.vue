<template>
    <transition name="oreo-fade" @after-leave="afterLeave">
        <div :class="[b('mask',[fullscreen]),customClass]"
        :style="{backgroundColor:background||''}"
         v-show="visible">
            <div :class="b('spinner')">
                <preloader 
                    :type="type" size="40px" 
                    :theme="theme"></preloader>
            </div>
            <div :class="b('text')" v-if="text">{{text}}</div>
        </div>
    </transition>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
import Preloader from 'oreo-ui/components/preloader'
export default createBasic({
    name: 'loading',
    components: {
        Preloader
    },
    props: {
        text: String,
        fullscreen: {
            type: Boolean,
            default: true
        },
        visible: Boolean,
        background: String,
        customClass: Object,
        type: {
            type: String,
            default: 'circle'
        },
        theme: {
            type: String,
            default: 'primary'
        }
    },
    methods: {
        afterLeave() {
            this.$emit('after-leave')
        }
    }
})
</script>


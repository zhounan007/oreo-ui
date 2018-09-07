<template>
 <transition name="oreo-fade">
      <div 
        v-show="visible"
        :style="style"
        class="oreo-mask"
        :class="className"
        @touchmove.prevent.stop
        @click="$emit('click',$event)"
      >
      </div>
 </transition>
    <!-- <div 
        v-show="visible"
        :style="style"
        class="oreo-mask"
        :class="className"
        @touchmove.prevent.stop
        @click="$emit('click',$event)"
      >
      </div> -->
</template>
<script>
const prefix = 'oreo-mask'
export default {
    name: 'mask',
    components: {
        // ZTransition
    },
    props: {
        visible: Boolean,
        zIndex: Number,
        className: String,
        customStyle: Object
    },
    computed: {
        style() {
            return {
                zIndex: this.zIndex,
                ...this.customStyle
            }
        }
    }
}
</script>

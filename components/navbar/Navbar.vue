<template>
  <div :class="b({fixed,dark})">
      <div :class="{'oreo-navbar_left':true}" @click="$emit('click-left')">
          <slot name="left">
            <a href="javascript:;" >
              <oreo-icon v-if="leftArrow" name="left"></oreo-icon>
              <span v-if="leftText" v-text="leftText"></span>
            </a>
          </slot>
      </div>
      <div :class="{'oreo-navbar_center':true}">
          <slot name="title">
              {{title}}
          </slot>
      </div>
      <div :class="{'oreo-navbar_right':true}" @click="$emit('click-right')">
          <slot name="right">
              <a href="javascript:;" >
                <span v-if="rightText" v-text="rightText"></span>
                <!-- <oreo-icon></oreo-icon> -->
              </a>
          </slot>
      </div>
  </div>
</template>
<script>
import createBasic from '../utils/create-basic'
import OreoIcon from '../icon'
export default createBasic({
    name: 'navbar',
    components: {
        OreoIcon
    },
    props: {
        title: String,
        leftText: String,
        leftArrow: Boolean,
        rightText: String,
        fixed: Boolean,
        dark: Boolean
    },
    methods: {
    }
})
</script>

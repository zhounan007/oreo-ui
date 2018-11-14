<template>
  <div :class="b({
      link,
      active,
      multi:!!label
  })" 
    @touchstart="handleFocus" 
    @touchend="handleBlur"
    @touchcancel="handleBlur"
  >
      <div :class="b('thumb')">
              <slot name="icon">
              </slot>
          </div>
      <div :class="b('inner')">
          <div :class="b('content')">
              <slot name="content">
                  <div :class="b('title')">{{title}}</div>    
                  <div :class="b('brief')" v-if="label">{{label}}</div>
              </slot>
          </div>
          <div :class="b('extra')">
              <slot name="extra">
                  {{value}}
              </slot>
          </div>
          <div :class="b('arrow')" v-if="link"></div>
      </div>
  </div>
</template>
<script>
import RouterLink from 'oreo-ui/components/mixins/router-link'
import createBasic from 'oreo-ui/components/utils/create-basic'
export default createBasic({
    name: 'cell',
    mixins: [RouterLink],
    data() {
        return {
            active: false
        }
    },
    props: {
        title: String,
        value: [String, Number],
        link: {
            type: Boolean,
            default: false
        },
        label: String,
        index: [String, Number],
        clickable: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleBlur() {
            if (this.link || this.clickable) {
                this.active = false
            }
        },
        handleFocus(e) {
            if (this.link || this.clickable) {
                this.active = true
            }
            this.$emit('click', this.index, e)
            this.routerLink()
        }
    }
})
</script>

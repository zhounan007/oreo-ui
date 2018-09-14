<template>
  <oreo-popup position="bottom" :closeOverlayByClick="true" @click-overlay="handleOverlay" v-model="show">
    <div :class="b()" >
        <div :class="b('title')" v-if="title">{{title}}</div>
        <div  :class="[item.className,b('item')]" v-for="(item, index) in actions" :key="index" @click="handleSelected(item)">
              {{item.name}}
        </div>
        <div :class="b('action')">
            <div :class="b('item')" @click="handleClose">{{cancelText || t('oreo.actionsheet.cancel')}}</div>
        </div>
    </div>
  </oreo-popup>
</template>
<script>
import OreoPopup from 'oreo-ui/components/popup'
import createBasic from 'oreo-ui/components/utils/create-basic'
const empty = () => { }
export default createBasic({
  name: 'actionsheet',
  components: {
    OreoPopup
  },
  data() {
    return {
      show: false
    }
  },
  props: {
    value: Boolean,
    title: String,
    cancelText: String,
    actions: Array
  },
  watch: {
    value: function (v) {
      this.show = !!v
    }
  },
  methods: {
    handleSelected(item) {
      this.$emit('select', item)
    },
    handleOverlay() {
      this.$emit('click-overlay')
      this.$emit('input', false)
    },
    handleClose() {
      this.$emit('input', false)
      // this.$emit('close')
    }
  }
})
</script>

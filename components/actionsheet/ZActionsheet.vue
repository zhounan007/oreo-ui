<template>
  <z-modal :position="position" ref="sheetModal" @open="handleOpen" @close="handleClose">
      <div class="oreo-modal-content oreo-actionsheet" slot="inner">
          <div class="oreo-actionsheet-title" v-if="title"></div>
          <div class="oreo-actionsheet-item" :class="item.className" v-for="(item, index) in actions" :key="index" @click="handleSelected(item)">
                {{item.name}}
          </div>
          <div class="oreo-actionsheet-action">
              <div class="oreo-actionsheet-item" @click="handleClose">{{cancelText || t('oreo.actionsheet.cancel')}}</div>
          </div>
      </div>
  </z-modal>
</template>
<script>
import ZModal from '../modal'
import createBasic from '../utils/create-basic'
const empty = () => { }
export default createBasic({
  name: 'actionsheet',
  components: {
    ZModal
  },
  props: {
    value: Boolean,
    position: {
      type: String,
      default: 'bottom'
    },
    title: String,
    cancelText: String,
    actions: Array
    // sheetData: {
    //   type: Array
    // },
    // showActionsheet: {
    //   type: Boolean,
    //   default: false
    // }
  },
  watch: {
    value(val) {
      if (val) {
        this.open()
      } else {
        this.cancel()
      }
    }
  },
  methods: {
    handleSelected(item) {
      this.$emit('select', item)
    },
    open(callback) {
      this.$nextTick(() => {
        this.$refs['sheetModal'].open(callback || empty)
      })
    },
    cancel(callback) {
      this.$nextTick(() => {
        this.$refs['sheetModal'].close(callback || empty)
      })
    },
    handleOpen() {
      this.$emit('open')
    },
    handleClose() {
      this.$emit('input', false)
      this.$emit('close')
    }
  }
})
</script>

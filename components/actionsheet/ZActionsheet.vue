<template>
    <div @touchmove.prevent>
          <div v-if="showActionsheet" class="oreo-modal oreo-modal-mask oreo-modal-bottom" style="opacity: 1;" id="demo-actionsheet-1" @click.self="cancle">
        <div class="oreo-modal-content oreo-actionsheet">
            <div class="oreo-actionsheet-title">请选择</div>
            <div class="oreo-actionsheet-item" v-for="(item, index) in sheetData" :key="index" @click="sheetSelected(item)">
              {{item.sheet}}
            </div>
            <div class="oreo-actionsheet-action">
                <div class="oreo-actionsheet-item" @click="cancle">取消</div>
            </div>
        </div>
    </div>
    </div>

</template>
<script>
export default {
  name: 'z-actionsheet',
  props: {
    sheetData: {
      type: Array
    },
    showActionsheet: {
      type: Boolean,
      default: false
    }
  },
   methods: {
    sheetSelected(item) {
      this.$emit('selectedMeaage', item)
    },
    cancle() {
      this.$emit('closeActionsheet')
    }
  }
}
</script>

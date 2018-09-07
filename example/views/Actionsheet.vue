<template>
  <flexview>
    <scrollview title="Actionsheet 选择框" sub-title="数据选择">

        <div class="demo-body demo-wrap" >
          <oreo-button small @click="handleSheet">弹出Actionsheet</oreo-button>
        </div>
       
      <oreo-actionsheet  v-model="show" :actions="sexData" @select="handleSelectItem"></oreo-actionsheet>
    </scrollview>
  </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
  name: 'actionsheet',
  data() {
    return {
      show: false,
      sexData: [{
        name: '男'
      }, {
        name: '女'
      }]
    }
  },
  components: {
    flexview,
    scrollview
  },
  mounted() {
  },
  methods: {
    handleSheet() {
      this.show = true
    },
    handleSelectItem(item) {
      console.log(item)
      this.show = false
    }
  }
}
</script>
<style lang="less" scoped>
.message-content {
  height: 0.6rem;
  font-size: 0.26rem;
  padding: 0 0.12rem;
  text-align: center;
  margin-bottom: 0.2rem;
  .span_input {
    color: #999;
    display: inline-block;
    width: 50%;
    text-align: center;
    height: 100%;
    line-height: 0.6rem;
    border: 1px solid #999;
    border-radius: 5px;
  }
}
</style>
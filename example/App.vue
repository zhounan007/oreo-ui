<template>
  <transition :name="transitionName">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route'(to, from) {
      const toDept = to.path.split('/').length
      const fromDept = from.path.split('/').length
      console.log('to:' + toDept + ' , from:' + fromDept)
      this.transitionName = toDept < fromDept ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style lang="less">
@import "./styles/demo.less";
</style>

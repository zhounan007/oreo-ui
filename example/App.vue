<template>
  <transition :name="transitionName">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
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
      if (to.path === from.path) {
        this.transitionName = 'fade'
      } else if (to.path === '/') {
        this.transitionName = 'slide-right'
      } else if (from.path === '/') {
        this.transitionName = 'slide-left'
      } else {
        this.transitionName = toDept < fromDept ? 'slide-right' : 'slide-left'
      }
    }
  }
}
</script>

<style lang="less">
@import "./styles/demo.less";
</style>

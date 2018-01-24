<template>
  <div class="scrollview">
  
    <div class="demo-hd" v-if="visible">
      <div class="demo-title">
        <router-link to="/">
          <z-icon type="home"></z-icon>
        </router-link>
        <span>{{title}}</span>
      </div>
      <div class="demo-subtitle">{{subTitle}}</div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'scrollview',
  props: {
    title: '',
    subTitle: ''
  },
  computed: {
    visible() {
      return !!this.title
    }
  }
}
</script>
<style lang="less">
.scrollview {
  width: 100%;
  height: 100%;
  flex: 1;
  position: relative;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  -webkit-box-sizing: border-box;
   // -webkit-overflow-scrolling: touch;
  // transition: all 0.2s ease-in-out;
  background: #efeff4;
  margin: 0 auto; // will-change: scroll-position;
  .demo-hd {
    padding: 0.4rem;
    .demo-title {
      color: #3d3d3d;
      font-size: 0.42rem;
      font-weight: 400;
      display: flex;
      a {
        display: flex;
        align-items: center;
        padding-right: 0.2rem;
      }
    }
    .demo-subtitle {
      font-size: 0.26rem;
      color: #3d3d3d;
      font-weight: 400;
    }
    .demo-home {
      padding-right: 10px;
    }
  }
  .demo-body {
    position: relative;
    &.demo-wrap {
      padding: 0 0.2rem;
    }
    h2 {
      /* padding: .3rem 0 .18rem .3rem; */
      color: #000;
      font-size: 0.32rem;
      font-weight: bolder;
      padding: 0 0 0 0.5rem;
    }
    .demo-content {
      .demo-describe {
        color: #999999;
        font-size: 0.3rem;
        padding: 0 0 0 .2rem;
      }
    }
  }
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>

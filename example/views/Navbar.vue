
<template>
    <flexview>
        <scrollview title="Navbar 导航" sub-title="">
            <div class="demo-body" >
                <h2>
                    基本用法
                </h2>

                <oreo-navbar title="导航栏"></oreo-navbar>
                <!-- <oreo-navbar title="导航栏" fixed left-arrow></oreo-navbar> -->
                <oreo-navbar title="导航栏"  dark left-arrow></oreo-navbar>
                <oreo-navbar title="导航栏" left-arrow left-text="返回"></oreo-navbar>
                <oreo-navbar title="导航栏" dark left-arrow left-text="返回"  right-text="前进"></oreo-navbar>
    
                <oreo-navbar title="导航栏" left-arrow left-text="返回" right-text="前进"></oreo-navbar>
                
            </div>

        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'navbar',
    data() {
        return {
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
    }
}
</script>
<style lang="less" scopd>
.demo-body {
  .oreo-navbar {
      margin-bottom: 20px;
  }
}
</style>


<template>
    <flexview>
        <scrollview title="Preloader 加载" sub-title="支持各种形态">
            <div class="demo-body demo-wrap" >
                <h2>
                    Circle
                </h2>
                
                <div class="demo-preloader">
                    <oreo-preloader></oreo-preloader>

                    <oreo-preloader theme="light" ></oreo-preloader>

                    <oreo-preloader theme="primary" ></oreo-preloader>
                </div>
                
                

                <h2>Spinner</h2>

                <oreo-preloader type="spinner"></oreo-preloader>

                <oreo-preloader type="spinner" theme="light" size="0.8rem"></oreo-preloader>
            </div>
        
           

        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'preloader',
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
  .oreo-button {
    margin: 1em 0;
  }
}
.demo-preloader{
  
}

</style>

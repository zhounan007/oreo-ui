
<template>
    <flexview>
        <scrollview title="Popup 弹窗" sub-title="支持各种形态">
            <div class="demo-body demo-wrap" >
                <h2>
                    Default
                </h2>
                <oreo-button small @click="clickByDefault">Popup by Default</oreo-button>

                <h2>
                    Fullscreen
                </h2>
                <oreo-button small @click="clickByFullscreen">Popup by Fullscreen</oreo-button>

                <h2>
                    Position
                </h2>
                <oreo-button v-for="position in ['top','right','bottom','left']" :key="position" small @click="clickByEdge(position)">Modal from {{position}}</oreo-button>
    
            </div>
        
            <oreo-popup  v-model="show" @click-overlay="handleOverlay" >
                <div style="width: 5rem;
                    height: 3rem;
                    display: block;
                    padding: 1rem;
                    background: #fff;
                    ">
                     <h3>Default Popup</h3>
                    <div>
                        Hello world!!!
                       <oreo-button @click="show =!show" type="primary" inline>Close</oreo-button>
                    </div>
                </div>
            </oreo-popup>

            <oreo-popup  v-model="show2" @click-overlay="handleOverlay" :fullscreen="fullscreen" :overlay="false" transition="oreo-zoom">
                <div style="width: 5rem;
                    height: 3rem;
                    display: block;
                    padding: 1rem;
                    background: #fff;
                    ">
                     <h3>Fullscreen</h3>
                    <div>
                        Hello world!!!
                       <oreo-button @click="show2 =!show2" type="primary" inline>Close</oreo-button>
                    </div>
                </div>
            </oreo-popup>

            <oreo-popup  :position="position" v-model="show1" fullscreen @click-overlay="handleOverlay">
                <div style="
                    display: block;
                    padding: 1rem;
                    background: #fff;
                    ">
                     <h3>Default Popup</h3>
                    <div>
                        Hello world!!!
                           <oreo-button @click="show1 =!show1" type="primary" inline>Close</oreo-button>
                    </div>
                </div>
            </oreo-popup>

        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'modal',
    data() {
        return {
            show: false,
            show1: false,
            show2: false,
            position: '',
            fullscreen: false,
            overlay: false
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        clickByDefault() {
            this.show = true
        },
        clickByFullscreen() {
            this.fullscreen = true;
            this.overlay = false;
            this.show2 = true
        },
        clickByEdge(position) {
            console.log(position)
            this.position = position
            this.show1 = true
            // this.openModal('modalEdge')
        },
        handleOverlay() {
        }
    }
}
</script>
<style lang="less" scopd>
.demo-body {
  .oreo-button {
    margin: 1em 0;
  }
}
</style>

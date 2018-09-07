
<template>
    <flexview>
        <scrollview title="Input 输入框" sub-title="支持各种形态">
            <div class="demo-body " >
                
               <oreo-cell-group header="不同状态的Input" line>
                    <oreo-input label="姓名" value="znsw007"></oreo-input>
                    <oreo-input label="姓名" placeholder="请输入姓名"></oreo-input>
                    <oreo-input label="姓名" value="znsw007" disabled></oreo-input>
                </oreo-cell-group>

                <oreo-cell-group header="分居两侧的Input" line>
                    <oreo-input label="姓名" value="znsw007" rightAlign></oreo-input>
                    <oreo-input label="姓名" placeholder="请输入姓名" rightAlign></oreo-input>
                    <oreo-input label="姓名" value="znsw007" disabled rightAlign></oreo-input>
                </oreo-cell-group>

                <oreo-cell-group header="不带Label标签" line>
                    <oreo-input  placeholder="请输入姓名"></oreo-input>
                    <oreo-input type="password" placeholder="请输入密码" ></oreo-input>
                    <oreo-input  value="znsw007" disabled ></oreo-input>
                </oreo-cell-group>
    
            </div>
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

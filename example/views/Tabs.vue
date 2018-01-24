
<template>
    <flexview>
        <scrollview title="Tabs" sub-title="">
            <div class="demo-body ">
                <!-- <h2>
                    Top
                </h2>
    
                <z-tabs>
                    <z-tab-pane label="选项一">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                    </z-tab-pane>
                    <z-tab-pane label="选项二">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                    </z-tab-pane>
                    <z-tab-pane label="选项三">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                    </z-tab-pane>
                </z-tabs>
    
                <h2>
                    Left
                </h2>
    
                <div :style="boxStyle">
                    <z-tabs position="left">
                        <z-tab-pane label="选项一">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                        </z-tab-pane>
                        <z-tab-pane label="选项二">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                        </z-tab-pane>
                        <z-tab-pane label="选项三">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                        </z-tab-pane>
                    </z-tabs>
                </div> -->

                <div style="height:3000px;"></div>
    
                <h2>
                    Sticky
                </h2>
    
                <z-sticky-container>
                    <z-tabs>
                        <z-sticky>
                            <z-tab-bar slot-scope="props" :style="[props.stickyStyle]"></z-tab-bar>
                        </z-sticky>
                        <z-tab-pane label="选项一">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                        </z-tab-pane>
                        <z-tab-pane label="选项二">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                        </z-tab-pane>
                        <z-tab-pane label="选项三">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                        </z-tab-pane>
                    </z-tabs>
                </z-sticky-container>

                <div style="height:3000px;"></div>
    
                <!-- <h2>
                    Bottom
                </h2>
    
                <z-tabs position="bottom">
                    <z-tab-pane label="选项一">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                    </z-tab-pane>
                    <z-tab-pane label="选项二">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                    </z-tab-pane>
                    <z-tab-pane label="选项三">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                    </z-tab-pane>
                </z-tabs>
    

                
                <h2>
                    Right
                </h2>
    

                <div :style="boxStyle">
                    <z-tabs position="right">
                        <z-tab-pane label="选项一">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center;  background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                        </z-tab-pane>
                        <z-tab-pane label="选项二">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center;  background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                        </z-tab-pane>
                        <z-tab-pane label="选项三">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center;  background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                        </z-tab-pane>
                    </z-tabs>
                </div> -->


            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'tabs',
    data() {
        return {
            boxStyle: {
                height: '300px'
            },
            onTabClick: function () {
                console.log('------------')
            }
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
</style>

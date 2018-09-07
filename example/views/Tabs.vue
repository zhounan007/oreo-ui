
<template>
    <flexview>
        <scrollview title="Tabs" sub-title="">
            <div class="demo-body ">
                 <h2>
                    Top
                </h2>
    
                <!-- <oreo-tabs>
                    <oreo-tab-pane label="选项一">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                    </oreo-tab-pane>
                    <oreo-tab-pane label="选项二">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                    </oreo-tab-pane>
                    <oreo-tab-pane label="选项三">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                    </oreo-tab-pane>
                </oreo-tabs>

                <oreo-tabs>
                        <oreo-tab-pane label="选项一">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项二">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项三">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                        </oreo-tab-pane>
                </oreo-tabs> -->
    
                <oreo-tabs position="top">
                    <oreo-tab-pane label="选项一">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                    </oreo-tab-pane>
                    <oreo-tab-pane label="选项二">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                    </oreo-tab-pane>
                    <oreo-tab-pane label="选项三">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                    </oreo-tab-pane>
                </oreo-tabs>
    
                <h2>
                    Left
                </h2>
    
                <div :style="boxStyle">
                    <oreo-tabs position="left">
                        <oreo-tab-pane label="选项一">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项二">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项三">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                        </oreo-tab-pane>
                    </oreo-tabs>
                </div> 

                <!-- <div style="height:3000px;"></div>
    
                <h2>
                    Sticky
                </h2> -->
    
                <!-- <oreo-sticky-container>
                    <oreo-tabs>
                        <oreo-sticky>
                            <oreo-tab-bar slot-scope="props" :style="[props.stickyStyle]"></oreo-tab-bar>
                        </oreo-sticky>
                        <oreo-tab-pane label="选项一">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项二">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项三">
                            <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                        </oreo-tab-pane>
                    </oreo-tabs>
                </oreo-sticky-container> -->

                <!-- <div style="height:3000px;"></div> -->
    
                <h2>
                    Bottom
                </h2>
    
                <oreo-tabs position="bottom">
                    <oreo-tab-pane label="选项一">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                    </oreo-tab-pane>
                    <oreo-tab-pane label="选项二">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                    </oreo-tab-pane>
                    <oreo-tab-pane label="选项三">
                        <div style="display: flex; align-items: center; justify-content: center; height: 150px; background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                    </oreo-tab-pane>
                </oreo-tabs>
    

                
                <h2>
                    Right
                </h2>
    

                <div :style="boxStyle">
                    <oreo-tabs position="right">
                        <oreo-tab-pane label="选项一">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center;  background-color: rgb(255, 255, 255);">Content of 1 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项二">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center;  background-color: rgb(255, 255, 255);">Content of 2 tab</div>
                        </oreo-tab-pane>
                        <oreo-tab-pane label="选项三">
                            <div :style="boxStyle" style="display: flex; align-items: center; justify-content: center;  background-color: rgb(255, 255, 255);">Content of 3 tab</div>
                        </oreo-tab-pane>
                    </oreo-tabs>
                </div> 

<h2>
                </h2>
    

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


<template>
    <flexview>
        <scrollview title="Sticky" sub-title="">
            <div class="demo-body ">
                <h2>
                    Top
                </h2>
    
                <oreo-sticky-container v-for="(item,index) in data " :key="index" :style="item.style">
    
                    <oreo-sticky>
                        <div slot-scope="props" :style="[props.stickyStyle,item.style1]">
                            序列:{{index}}
                            <br> 样式：{{props.stickyStyle}}
                            <br>
                        </div>
                    </oreo-sticky>
                </oreo-sticky-container>
    
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'sticky',
    data() {
        return {
            data: []
        }
    },
    computed: {

    },
    components: {
        flexview,
        scrollview
    },
    created() {
        for (let i = 0; i < 10; i++) {
            this.data.push({
                style: {
                    'height': '1000px',
                    'backgroundColor': `hsl(${i * 40}, 70%, 90%)`
                },
                style1: {
                    'height': '100px',
                    'backgroundColor': `hsl(${i * 40}, 70%, 50%)`
                }
            })
        }
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

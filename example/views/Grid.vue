
<template>
    <flexview>
        <scrollview title="Grid 布局" sub-title="基于flex,支持多列及图文排列">
            <div class="demo-body " >
                <h2>
                    Basic
                </h2>
                
                <oreo-grid line :data="basic" @click="handlerItem">
                    <template slot-scope="{item}">{{item.text}}
                    </template>
                </oreo-grid>

                <h2>
                    Icon,Text
                </h2>
                <oreo-grid line :data="basic" @click="handlerItem" :column="4">
                </oreo-grid>



                <h2>
                    Square
                </h2>
                <oreo-grid line square :data="basic" @click="handlerItem">
                </oreo-grid>

                <h2>
                    Custom
                </h2>
                <oreo-grid line square :data="basic" @click="handlerItem" :column="4">
                    <template slot-scope="{item}">
                         <img :src="item.icon" style="width:60px">
                        <div style="color:#409EFF;">{{item.text}}</div>
                    </template>
                </oreo-grid>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'flex',
    data() {
        return {
            basic: []
        }
    },
    created() {
        for (let i = 0; i < 8; i++) {
            this.basic.push({
                index: i,
                text: 'Grid',
                icon: 'http://owz1rt8et.bkt.clouddn.com/icon/icon.png'
            })
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        handlerItem(index, item) {
            console.log(index)
        }
    }
}
</script>
<style lang="less" scopd>
.demo-body {
  .demo-flex-item {
    text-align: center;
    background: #bbb;
    padding: 0.2rem 0.1rem;
    margin: 0.1rem;
  }
}
</style>

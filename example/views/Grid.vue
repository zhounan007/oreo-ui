
<template>
    <flexview>
        <scrollview title="Grid 布局" sub-title="基于flex,支持多列及图文排列">
            <div class="demo-body " >
                <h2>
                    Basic
                </h2>
                
                <z-grid border :data="basic" @click="handlerItem">
                    <z-grid-item slot="item" slot-scope="props" :index="props.item.index">
                        {{props.item.text}}
                    </z-grid-item>
                </z-grid>

                <h2>
                    Icon,Text
                </h2>
                <z-grid border :data="basic" @click="handlerItem" :column="4">
                    <z-grid-item slot="item" slot-scope="props" :index="props.item.index" :text="props.item.text" :icon="props.item.icon">
                    </z-grid-item>
                </z-grid>



                <h2>
                    Square
                </h2>
                <z-grid border square :data="basic" @click="handlerItem">
                    <z-grid-item slot="item" slot-scope="props" :index="props.item.index" :text="props.item.text" :icon="props.item.icon">
                    </z-grid-item>
                </z-grid>

                <h2>
                    Custom
                </h2>
                <z-grid border square :data="basic" @click="handlerItem" :column="4">
                    <z-grid-item slot="item" slot-scope="props" :index="props.item.index">
                        <img :src="props.item.icon" style="width:1.2rem">
                        <div style="color:#409EFF;">{{props.item.text}}</div>
                    </z-grid-item>
                </z-grid>
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

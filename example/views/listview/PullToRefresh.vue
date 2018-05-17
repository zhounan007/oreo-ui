
<template>
    <flexview>
        <scrollview>

            <div style="width:100%;height:600px;position:relative;">
                <z-scroll ref="scroll" :pullUpLoad="loadmore" :pullDownRefresh="refresh" :startY="startY" @pullingDown="onPullingDown" @pullingUp="onPullingUp" :data="data">
                <!-- <div class="oreo-list" v-if="data.length">
                        <div class="oreo-list-body">
                            <div class="oreo-list-item" v-for="(item,index) in data" :key="index">
                                <div class="oreo-list-item-line">
                                    <div class="oreo-list-item-content">{{item.title}}</div>
                                    <div class="oreo-list-item-extra">{{item.text}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else>
                        <div class=" oreo-loading oreo-loading-dark oreo-loading-sm">
                        </div>
                    </div> -->
                <div slot="item" slot-scope="props" class="oreo-list-item">
                    <div class="oreo-list-item-line">
                        <div class="oreo-list-item-content">{{props.item.title}}</div>
                        <div class="oreo-list-item-extra">{{props.item.text}}</div>
                    </div>
                </div>
    
            </z-scroll>
            </div>
            
        </scrollview>
    </flexview>
</template>
<script>
import flexview from '@e/views/flexview'
import scrollview from '@e/views/scrollview'
export default {
    name: 'button',
    data() {
        return {
            startY: 0,
            loadmore: true,
            refresh: {
                threshold: 150,
                stop: 100
            },
            data: []
        }
    },
    components: {
        flexview,
        scrollview
    },
    computed: {
    },
    watch: {
        startY(v) {
            console.log(v)
        }
    },
    created() {
        setTimeout(() => {
            let i = 30
            while (i > 0) {
                this.data.push({
                    text: '2017-02-01',
                    title: '标题' + i
                })
                i--
            }
        }, 1000)
    },
    methods: {
        onPullingUp() {
            // 更新数据
            console.log('pulling up and load data')
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    // 如果有新数据
                    let newPage = []
                    for (let i = 0; i < 5; i++) {
                        newPage.push({
                            text: '2017-02-01',
                            title: new Date()
                        })
                    }

                    this.data = this.data.concat(newPage)
                }
                this.$refs.scroll.forceUpdate()
            }, 1500)
        },
        onPullingDown() {
            // 模拟更新数据
            console.log('pulling down and load data')
            setTimeout(() => {
                if (Math.random() > 0.5) {
                    // 如果有新数据
                    this.data.unshift({
                        text: '2017-02-01',
                        title: new Date()
                    })
                    this.data.unshift({
                        text: '2017-02-01',
                        title: new Date()
                    })
                    this.data.unshift({
                        text: '2017-02-01',
                        title: new Date()
                    })
                }
                this.$refs.scroll.forceUpdate()
            }, 2000)
        },
        openAlert(type) {
            this.$dialog({
                message: 'Hello World',
                type: 'alert',
                theme: type,
                okButtonText: 'ok',
                cancelButtonText: 'cancel'

            }).then(action => {
                console.log('alert callback with action: ' + action)
            })
        },
        goto() {
            this.$router.push('/')
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

<template>
    <div style="overflow: scroll;height: 100% ">
        <z-cell-group>
            <div v-for="(val, i) in opt" :key="i">
                <template v-if="typeof(val.img) === 'string'">
                    <z-news-card :title="val.title" :img="val.img">
                        <template slot="info">
                            <div>
                                郑州
                            </div>
                            <div>
                                x
                            </div>
                        </template>
                    </z-news-card>
                </template>
                <template v-else>
                    <z-multiImg-card :title="val.title" :img="val.img">
                        <template slot="info">
                            <div>
                                郑州
                            </div>
                            <div>
                                x
                            </div>
                        </template>
                    </z-multiImg-card>
                </template>
            </div>
        </z-cell-group>
    </div>
</template>
<script>
export default {
    name: 'news-card',
    data() {
        return {
            opt: [
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈',
                    img: 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈',
                    img: ['http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg']
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈',
                    img: 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈',
                    img: ['http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg']
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈',
                    img: 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg'
                }
            ]
        }
    },
    computed: {
    }
}
</script>
<style lang="less" scoped>
.card-info {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 0.3rem;
}
</style>

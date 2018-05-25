<template>
    <flexview>
        <scrollview title="NewsCard">
            <div class="demo-body">
                <div class="demo-cont">
                    <z-cell-group>
                        <div v-for="(val, i) in opt" :key="i">
                            <template v-if="val.img === void(0)">
                                <z-text-card :title="val.title" info="郑州" source="央视新闻网" num="阅读 48" date="1分钟前" brief="测试测试测试测试" type="blue">
                                </z-text-card>
                            </template>
                            <template v-else-if="typeof(val.img) === 'string'">
                                <z-news-card :title="val.title" :img="val.img" info="郑州" source="央视新闻网" num="阅读 48" date="1分钟前" brief="测试测试测试测试" type="red" @click.native="detail()">
                                    <div slot="delete" @click.stop="test()">
                                        X
                                    </div>
                                </z-news-card>
                            </template>
                            <template v-else>
                                <z-multiImg-card :title="val.title" :img="val.img" info="郑州" source="央视新闻网" num="阅读 48" date="1分钟前" type="orange" brief="测试测试测试测试">
                                </z-multiImg-card>
                            </template>
                        </div>
                    </z-cell-group>
                </div>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'news-card',
    components: {
        flexview,
        scrollview
    },
    data() {
        return {
            opt: [
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    img: 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    img: ['http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg']
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    img: 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg'
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    img: ['http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg', 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg']
                },
                {
                    title: '我是标题，哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    img: 'http://owz1rt8et.bkt.clouddn.com/assets/nature02.jpg'
                }
            ]
        }
    },
    computed: {
    },
    methods: {
        test() {
            alert('删除')
        },
        detail() {
            alert('查看详情')
        }
    }
}
</script>

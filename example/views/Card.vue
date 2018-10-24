<template>
    <flexview>
        <scrollview>
            <div class="demo-card">
                <oreo-card title="张小帅" brief="5分钟前" :tag="tag" :pic="pic2" :bodyText="bodyText"></oreo-card>
                <oreo-card title="李小红" brief="10分钟前" :tag="tag" :pic="pic3" :bodyText="bodyText"></oreo-card>
                <oreo-card title="王小明" brief="刚刚" :tag="tag" :pic="pic" :bodyText="bodyText"></oreo-card>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview.vue';
import scrollview from './scrollview.vue';
export default {
    components: {
        flexview,
        scrollview
    },
    data() {
        return {
            tag: ['钱包', '剑桥餐厅二楼超市门口'],
            pic: ['http://img3.imgtn.bdimg.com/it/u=2694145511,131085106&fm=26&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=2694145511,131085106&fm=26&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=2694145511,131085106&fm=26&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=2694145511,131085106&fm=26&gp=0.jpg'],
            pic2: ['http://img3.imgtn.bdimg.com/it/u=2694145511,131085106&fm=26&gp=0.jpg'],
            pic3: ['http://img3.imgtn.bdimg.com/it/u=2694145511,131085106&fm=26&gp=0.jpg', 'http://img3.imgtn.bdimg.com/it/u=2694145511,131085106&fm=26&gp=0.jpg'],
            bodyText: '教学楼楼梯口捡到一串钥匙，应该是宿舍钥匙，哪位同学的速来认领。'
        }
    }
}
</script>
<style lang="less" scoped>
.demo-card {
  background-color: #fff;
  padding: 0.3rem;
}
</style>

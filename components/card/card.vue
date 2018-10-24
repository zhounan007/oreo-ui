<template>
    <div :class="b()">
        <slot name="header">
            <div :class="b('header')">
                <span :class="b('title')">{{title}}</span>
                <span :class="b('brief')">{{brief}}</span>
            </div>
        </slot>
        <slot name="body">
            <div :class="b('body')">
                <slot>
                    <p :class="b('body-text')">
                        {{bodyText}}
                    </p>
                    <div :class="b('body-pic')">
                        <img :class="formatPic" v-for="(item, index) in pic" :key="index" :src="item" alt="">
                    </div>
                </slot>
            </div>
        </slot>
        <slot name="footer">
            <div :class="b('footer')">
                <span :class="b('tag')" v-for="(item, index ) in tag" :key="index">{{item}}</span>
            </div>
        </slot>
    </div>
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic';
export default createBasic({
    name: 'card',
    props: {
        title: String,
        brief: String,
        tag: Array,
        pic: Array,
        bodyText: String
    },
    computed: {
        formatPic() {
            if (this.pic.length >= 3) {
                return this.b('pic-multi')
            } else {
                return this.b('pic-one')
            }
        }
    }
})
</script>
<style lang="less" scoped>
</style>

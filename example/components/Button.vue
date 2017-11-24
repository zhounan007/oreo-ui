
<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <div class="demo-name">
                    Button 按钮
                </div>
                <div class="demo-subtitle"></div>
            </div>
            <div class="demo-body">
                <h2>
                    Type
                </h2>
                <z-button v-for="(item,index) in array" :key="index" :type="item.type">{{item.text}}</z-button>

                <z-button small>Small Button</z-button>

                <z-button disabled>Small Button</z-button>

                <z-button inline>Small Button</z-button>

                <z-button text="提交"></z-button>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'button',
    data() {
        return {
            array: [{
                type: '',
                text: 'Basic Button'
            }, {
                type: 'primary',
                text: 'Primary Button'
            }, {
                type: 'success',
                text: 'Success Button'
            }, {
                type: 'error',
                text: 'Error Button'
            }]
        }
    },
    components: {
        flexview,
        scrollview
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

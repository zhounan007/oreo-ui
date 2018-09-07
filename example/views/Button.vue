
<template>
    <flexview>
        <scrollview title="Button 按钮" sub-title="支持各种类型">
            <div class="demo-body demo-wrap" >
                <h2>
                    Type
                </h2>
                <oreo-button v-for="(item,index) in array" :key="index" :type="item.type">{{item.text}}</oreo-button>

                <oreo-button disabled>Disabled Button</oreo-button>

                <oreo-button text="提交"></oreo-button>

                <h2>Small</h2>

                <oreo-button small>Small Button</oreo-button>

                <oreo-button small type="primary" >Small Primary Button</oreo-button>

                <h2>Inline</h2>

                <oreo-button inline>Small Button</oreo-button>

                <oreo-button inline type="success">Small Button</oreo-button>

                <oreo-button inline small type="error">Small Button</oreo-button>
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

<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <div class="demo-name">
                    Radio 单选框
                </div>
                <div class="demo-subtitle"></div>
            </div>
            <div class="demo-body">
                <h2>
                    选择框在左
                </h2>
                <div class="demo-content">
                    <oreo-radio :options="radioData" name="radio1" v-model="radio1"></oreo-radio>
                </div>
                <h2>
                    选择框在右
                </h2>
                <div class="demo-content">
                    <oreo-radio :options="radioData" name="radio2" v-model="radio2" :innerRight="true"></oreo-radio>
                </div>
                <h2>
                    radio
                </h2>
                <div class="demo-content">
                    <oreo-radio :options="radioData3" name="radio3" v-model="radio3" :agree="true"></oreo-radio>
                </div>
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
            radioData: [
                {
                    text: '香蕉',
                    value: 'banner'
                },
                {
                    text: '苹果',
                    value: 'apple'
                },
                {
                    text: '橘子',
                    value: 'orange'
                },
                {
                    text: '葡萄',
                    value: 'grape',
                    disabled: true,
                    checked: true
                }
            ],
            radio1: '',
            radio2: '',
            radioData3: [{
                text: '同意协议',
                value: 'ty'
            }],
            radio3: ''
        }
    },
    components: {
        flexview,
        scrollview
    },
    watch: {
        radio1(newValue) {
            console.log(newValue)
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

<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <div class="demo-name">
                    CheckBox 复选框
                </div>
                <div class="demo-subtitle"></div>
            </div>
            <div class="demo-body">
                <h2>
                    input和label分居两侧
                </h2>
                <div class="demo-content">
                    <z-check-box :options="checkedData" v-model="chosenTopics"></z-check-box>
                </div>
                <h2>
                    input和label居左对齐
                </h2>
                <div class="demo-content">
                    <z-check-box :options="checkedData1" v-model="chosenTopics1" :labelLeft="true"></z-check-box>
                </div>
                <h2>
                    input和label居左对齐
                </h2>
                <div class="demo-content">
                    <z-check-box :options="checkedData1" v-model="chosenTopics1" :labelLeft="true" :inner-right="true"></z-check-box>
                </div>
                <div class="demo-content">
                    <z-check-box :options="checkedData3" v-model="chosenTopics3" :labelLeft="true" :agree="true"></z-check-box>
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
            checkedData: [
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
                    disabled: true
                }
            ],
            checkedData1: [
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
                    labelLeft: true
                }
            ],
            chosenTopics: ['grape'],
            chosenTopics1: ['grape'],
            checkedData3: [{
                text: '同意协议',
                value: 'ty'
            }],
            chosenTopics3: ['ty']
        }
    },
    components: {
        flexview,
        scrollview
    },
    watch: {
        chosenTopics(newValue) {
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

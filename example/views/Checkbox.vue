
<template>
    <flexview>
        <scrollview title="Checkbox 复选框" sub-title="">
            <div class="demo-body " >

                <h2>基础用法</h2>
                <oreo-checkbox v-model="checked"  @input="handleCheck">我是复选框</oreo-checkbox>

                <oreo-checkbox v-model="checked"  shape="square">我是复选框</oreo-checkbox>

                <h2>禁用</h2>
                <oreo-checkbox v-model="checked"  disabled>我是复选框</oreo-checkbox>

                <oreo-checkbox v-model="checked"  shape="square" disabled>我是复选框</oreo-checkbox>

                <h2>位置</h2>
                <oreo-checkbox v-model="checked"   position="right">我是复选框</oreo-checkbox>

                <oreo-checkbox v-model="checked"  shape="square" disabled position="right">我是复选框</oreo-checkbox>

                <h2>Checkbox-Group</h2>

                <oreo-checkbox-group v-model="values" :options="options" @input="handleCheckGroup">
                </oreo-checkbox-group>

                <oreo-checkbox-group v-model="values" :options="options" shape="square" position="right" :max="2">
                </oreo-checkbox-group>

            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'checkbox',
    data() {
        return {
            checked: false,
            values: ['B', 'C'],
            options: [{
                label: 'A',
                value: 'A',
                disabled: true
            }, {
                label: 'B',
                value: 'B',
                disabled: true
            }, {
                label: 'C',
                value: 'C',
                disabled: false
            }, {
                label: 'D',
                value: 'D',
                disabled: false
            }]
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        handleCheck(v) {
            console.log(v)
        },
        handleCheckGroup(v) {
            console.log(v)
        }
    }
}
</script>
<style lang="less" scopd>
.demo-body {
  .oreo-button {
    margin: 1em 0;
  }
  .oreo-checkbox {
    //   margin: 10px 0 0 20px;
  }
}
</style>

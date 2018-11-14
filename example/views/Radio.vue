
<template>
    <flexview>
        <scrollview title="Radio 单选框" sub-title="">
            <div class="demo-body " >

                <h2>基础用法</h2>
                <oreo-radio :option="{value:1,disabled:false}"  v-model="radio" @input="handleSingleRadio">AA</oreo-radio>
                <oreo-radio :option="{value:'3',disabled:true}"  v-model="radio" >
                    <a href="javascript:;" @click="handleUserAgree">用户协议</a> 同意
                </oreo-radio>
                
                <!-- <h2>禁用</h2>
                <oreo-radio :option="{value:1,disabled:false}"  v-model="radio" @input="handleSingleRadio">AA</oreo-radio>
                <oreo-radio :option="{value:'2',disabled:false}"  v-model="radio" >
                    <a href="javascript:;">用户协议</a> 同意
                </oreo-radio> -->


                <h2>radio-Group</h2>

                <oreo-radio-group v-model="values" :options="options" @input="handleRadioGroup">
                </oreo-radio-group>

                <oreo-radio-group v-model="values" :options="options" shape="circle" position="right" :max="2" >
                </oreo-radio-group>

              
                

            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'radio',
    data() {
        return {
            radio: '3',
            values: 'B',
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
        handleSingleRadio(v) {
            console.log(typeof v)
            console.log('single Radio', v)
        },
        handleRadioGroup(v) {
            console.log('radio Group', v)
        },
        handleUserAgree() {
            console.log('user agreement...')
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

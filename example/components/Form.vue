<template>
    <flexview>
        <scrollview>
            <div class="demo-hd">
                <div class="demo-name">
                    Form 表格
                </div>
                <div class="demo-subtitle"></div>
            </div>
            <div class="demo-body">
                <div class="demo-item">
                    <h2>input 输入框</h2>
                    <div class="demo-content">
                        <p class="demo-describe">带label标签</p>
                        <z-input label="姓名" placeholder="请输入姓名" v-model="name"></z-input>
                        <z-input label="电话" type="number" placeholder="请输入手机号码"></z-input>
                        <z-input label="邮箱" type="email" placeholder="Vue-oreo@newcapec.com" :disabled="true" :hideLabel="false"></z-input>
                    </div>
                    <div class="demo-content">
                        <p class="demo-describe">带label标签</p>
                        <z-input label="姓名" :rightAlign="true" placeholder="请输入姓名" v-model="name"></z-input>
                        <z-input label="电话" :rightAlign="true" type="number" placeholder="请输入手机号码"></z-input>
                        <z-input label="邮箱" :rightAlign="true" type="email" placeholder="Vue-oreo@newcapec.com" :disabled="true" :hideLabel="false"></z-input>
                    </div>
                    <div class="demo-content">
                        <p class="demo-describe">不带label标签</p>
                        <z-input placeholder="请输入密码" type="password"></z-input>
                        <z-input placeholder="请输入姓名" v-model="name"></z-input>
                    </div>
                </div>
                <div class="demo-item">
                    <h2>Textarea</h2>
                    <div class="demo-content">
                        <p class="demo-describe">文本域</p>
                        <z-textarea placeholder="请输入个人简介"></z-textarea>
                    </div>
                    <div class="demo-content">
                        <p class="demo-describe">字数统计</p>
                        <z-textarea placeholder="请输入个人简介" :chrNum="10" v-model="text"></z-textarea>
                    </div>
                </div>
                <div class="demo-item">
                    <h2>Switch</h2>
                    <div class="demo-content">
                        <z-switch v-for="(item,index) in switchData" :key="index" :text="item.text" :disabled="item.disabled" :checked="item.checked" v-model="toggleState"></z-switch>
                    </div>
                </div>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview.vue'
import scrollview from './scrollview.vue'
export default {
    name: 'form',
    data() {
        return {
            name: 'Vue-oreo',
            text: 'Vue-oreo',
            switchData: [
                {
                    text: '关闭状态'
                }, {
                    text: '开启状态',
                    checked: true
                }, {
                    text: '不可点击关闭状态',
                    disabled: true
                }, {
                    text: '不可点击开启状态',
                    checked: true,
                    disabled: true
                }
            ],
            toggleState: null
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
    }
}
</script>
<style lang="less">

</style>

<template>
    <flexview>
        <scrollview title="Form 表格" sub-title="基本实例">
            <div class="demo-body">
                <div class="demo-item">

                    <z-cell-group header="输入框">
                          <z-input label="用户名" placeholder="真实姓名"></z-input>
                        <z-input label="用户名" v-model="value"></z-input>
                        <z-input label="用户名" v-model="value" disabled></z-input>
                    </z-cell-group>

                    <z-cell-group header="文本右对齐">
                        <z-input label="用户名" rightAlign placeholder="真实姓名"></z-input>
                        <z-input label="用户名" v-model="value" rightAlign></z-input>
                        <z-input label="密码" type="password" v-model="value" rightAlign></z-input>
                        <z-input label="用户名" v-model="value" disabled rightAlign></z-input>
                    </z-cell-group>

                    <z-cell-group header="不带Label">
                        <z-input   placeholder="用户名"></z-input>
                        <z-input   placeholder="密码" type="password"  ></z-input>
                    </z-cell-group>

                    <!-- <div class="demo-content">
                        <z-form-group header="带Label标签">
                            <z-input label="姓名" placeholder="请输入姓名" v-model="name"></z-input>
                            <z-input label="电话" type="number" placeholder="请输入手机号码"></z-input>
                            <z-input label="邮箱" type="email" placeholder="Vue-oreo@newcapec.com" :disabled="true"></z-input>
                        </z-form-group>
                    </div>
                    <div class="demo-content">
                        <z-form-group header="带Label标签">
                            <z-input label="姓名" :rightAlign="true" placeholder="请输入姓名" v-model="name"></z-input>
                            <z-input label="电话" :rightAlign="true" type="number" placeholder="请输入手机号码"></z-input>
                            <z-input label="邮箱" :rightAlign="true" type="email" placeholder="Vue-oreo@newcapec.com" :disabled="true"></z-input>
                        </z-form-group>
                    </div>
                    <div class="demo-content">
                        <z-form-group header="不带Label标签">
                            <z-input placeholder="请输入密码" type="password"></z-input>
                            <z-input placeholder="请输入姓名" v-model="name"></z-input>
                        </z-form-group>
                    </div> -->
                </div>
                <!-- <div class="demo-item">
                    <h2>Textarea</h2>
                    <div class="demo-content">
                        <z-form-group header="文本域">
                            <z-textarea placeholder="请输入个人简介"></z-textarea>
                        </z-form-group>
                    </div>
                    <div class="demo-content">
                        <z-form-group header="字数统计">
                            <z-textarea placeholder="请输入个人简介" :chrNum="10" v-model="text"></z-textarea>
                        </z-form-group>
                    </div>
                </div>
                <div class="demo-item">
                    <h2>Switch</h2>
                    <div class="demo-content">
                        <z-switch v-for="(item,index) in switchData" :key="index" :header="item.header" :text="item.text" :disabled="item.disabled" :checked="item.checked" v-model="toggleState"></z-switch>
                    </div>
                </div> -->
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
            value: 'vue-oreo',
            name: 'Vue-oreo',
            text: 'Vue-oreo',
            switchData: [
                {
                    text: '关闭状态',
                    header: '我是一个开关'
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

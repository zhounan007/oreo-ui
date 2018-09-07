<template>
    <flexview>
        <scrollview title="Form 表格" sub-title="基本实例">
            <div class="demo-body">
                <div class="demo-item">

                    <oreo-cell-group header="输入框">
                          <oreo-input label="用户名" placeholder="真实姓名"></oreo-input>
                        <oreo-input label="用户名" v-model="value"></oreo-input>
                        <oreo-input label="用户名" v-model="value" disabled></oreo-input>
                    </oreo-cell-group>

                    <oreo-cell-group header="文本右对齐">
                        <oreo-input label="用户名" rightAlign placeholder="真实姓名"></oreo-input>
                        <oreo-input label="用户名" v-model="value" rightAlign></oreo-input>
                        <oreo-input label="密码" type="password" v-model="value" rightAlign></oreo-input>
                        <oreo-input label="用户名" v-model="value" disabled rightAlign></oreo-input>
                    </oreo-cell-group>

                    <oreo-cell-group header="不带Label">
                        <oreo-input   placeholder="用户名"></oreo-input>
                        <oreo-input   placeholder="密码" type="password"  ></oreo-input>
                    </oreo-cell-group>

                     <oreo-cell-group header="Switch">
                         <oreo-cell title="状态" >
                             <oreo-switch v-model="active" slot="extra"></oreo-switch>
                         </oreo-cell>
                         <oreo-cell title="状态" >
                             <oreo-switch v-model="active" disabled slot="extra"></oreo-switch>
                         </oreo-cell>
                    </oreo-cell-group>

                    <oreo-cell-group header="Textarea" footer="">
                         <oreo-textarea placeholder="请输入个人介绍" ></oreo-textarea>

                          <oreo-textarea placeholder="请输入个人介绍" v-model="data" :max="80"></oreo-textarea>
                    </oreo-cell-group>

                    <!-- <div class="demo-content">
                        <oreo-form-group header="带Label标签">
                            <oreo-input label="姓名" placeholder="请输入姓名" v-model="name"></oreo-input>
                            <oreo-input label="电话" type="number" placeholder="请输入手机号码"></oreo-input>
                            <oreo-input label="邮箱" type="email" placeholder="Vue-oreo@newcapec.com" :disabled="true"></oreo-input>
                        </oreo-form-group>
                    </div>
                    <div class="demo-content">
                        <oreo-form-group header="带Label标签">
                            <oreo-input label="姓名" :rightAlign="true" placeholder="请输入姓名" v-model="name"></oreo-input>
                            <oreo-input label="电话" :rightAlign="true" type="number" placeholder="请输入手机号码"></oreo-input>
                            <oreo-input label="邮箱" :rightAlign="true" type="email" placeholder="Vue-oreo@newcapec.com" :disabled="true"></oreo-input>
                        </oreo-form-group>
                    </div>
                    <div class="demo-content">
                        <oreo-form-group header="不带Label标签">
                            <oreo-input placeholder="请输入密码" type="password"></oreo-input>
                            <oreo-input placeholder="请输入姓名" v-model="name"></oreo-input>
                        </oreo-form-group>
                    </div> -->
                </div>
                <!-- <div class="demo-item">
                    <h2>Textarea</h2>
                    <div class="demo-content">
                        <oreo-form-group header="文本域">
                            <oreo-textarea placeholder="请输入个人简介"></oreo-textarea>
                        </oreo-form-group>
                    </div>
                    <div class="demo-content">
                        <oreo-form-group header="字数统计">
                            <oreo-textarea placeholder="请输入个人简介" :chrNum="10" v-model="text"></oreo-textarea>
                        </oreo-form-group>
                    </div>
                </div>
                <div class="demo-item">
                    <h2>Switch</h2>
                    <div class="demo-content">
                        <oreo-switch v-for="(item,index) in switchData" :key="index" :header="item.header" :text="item.text" :disabled="item.disabled" :checked="item.checked" v-model="toggleState"></oreo-switch>
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
            active: true,
            toggleState: null,
            data: '庭树不知人去尽，秋春还放旧时华。 多情唯有池中鲤，犹为离人护落花'
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        handleTextareaValue(v) {
            console.log(v)
        }
    }
}
</script>
<style lang="less">

</style>

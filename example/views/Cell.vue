
<template>
    <flexview>
        <scrollview title="Cell 单元格" sub-title="">
            <div class="demo-body " >
              
                <z-cell-group v-for="(d,index) in data" :key="index" :header="d.header">
                    <z-cell v-for="(item,idx) in d.items" :key="idx" 
                        :title="item.title" 
                        :value="item.value"
                        :label="item.label"
                        :link="item.link"
                    ></z-cell>
                </z-cell-group>

                <z-cell-group header="图标" footer="角标">
                    <z-cell  
                        title="很长很长很长的标题" 
                        value=""
                        label="描述信息"
                        link
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                        
                    </z-cell>
                    <z-cell  
                        title="很长很长很长的标题" 
                        value=""
                        link
                    >
                        <img src="http://owz1rt8et.bkt.clouddn.com/icon/icon.png" alt="" slot="icon" style="width:0.55rem;">
                        
                    </z-cell>
                </z-cell-group>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'cell',
    data() {
        return {
            data: [{
                header: '基本用法',
                footer: '',
                items: [{
                    title: '标题',
                    value: ''
                }, {
                    title: '标题',
                    value: '内容',
                    label: '描述内容'
                }]
            }, {
                header: '链接',
                footer: '',
                items: [{
                    title: '标题',
                    value: '内容',
                    link: true
                }, {
                    title: '标题',
                    value: '内容',
                    label: '描述内容',
                    link: true
                }]
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

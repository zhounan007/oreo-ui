<template>
    <flexview>
        <scrollview title="Badge">
            <div class="demo-body">
                <h2>基本</h2>
                <div class="demo-content">
                    <oreo-list header="带说明的列表项">
                        <oreo-list-item :link="false" title="标题">
                            <oreo-badge type="dot" slot="extra"></oreo-badge>
                        </oreo-list-item>
                        <oreo-list-item title="标题">
                            <oreo-badge slot="extra">文本</oreo-badge>
                        </oreo-list-item>
                    </oreo-list>
                </div>
                <h2>Tag</h2>
                <div class="demo-content">
                    <oreo-list header="small">
                        <oreo-list-item :link="false">
                            <oreo-tag v-for="(item, index) in tagData" :key="index" :type="item" size="small" text="标签" slot="content"></oreo-tag>
                        </oreo-list-item>
                    </oreo-list>
                    <oreo-list header="middle">
                        <oreo-list-item>
                            <oreo-tag v-for="(item, index) in tagData" :key="index" :type="item" text="标签" slot="content"></oreo-tag>
                        </oreo-list-item>
                    </oreo-list>
                    <oreo-list header="big">
                        <oreo-list-item>
                            <oreo-tag v-for="(item, index) in tagData" :key="index" :type="item" size="big" text="标签" slot="content"></oreo-tag>
                        </oreo-list-item>
                    </oreo-list>
                    <oreo-list header="半圆标签">
                        <oreo-list-item>
                            <oreo-tag :mark="true" text="半圆标签" slot="content"></oreo-tag>
                        </oreo-list-item>
                    </oreo-list>
                    <oreo-list header="三角标签">
                        <oreo-list-item>
                            <oreo-tag :triangle="true" direction="left" text="三角标签" slot="content"></oreo-tag>
                            <oreo-tag :triangle="true" direction="right" text="三角标签" slot="content"></oreo-tag>
                        </oreo-list-item>
                    </oreo-list>
                </div>
            </div>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    components: {
        flexview,
        scrollview
    },
    data() {
        return {
            tagData: ['default', 'red', 'blue', 'green', 'purple', 'orange']
        }
    }
}
</script>
<style lang="less" scoped>

</style>

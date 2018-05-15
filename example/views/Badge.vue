<template>
    <flexview>
        <scrollview title="Badge">
            <div class="demo-body">
                <h2>基本</h2>
                <div class="demo-content">
                    <z-list header="带说明的列表项">
                        <z-list-item :link="false" title="标题">
                            <z-badge type="dot" slot="extra"></z-badge>
                        </z-list-item>
                        <z-list-item title="标题">
                            <z-badge slot="extra">文本</z-badge>
                        </z-list-item>
                    </z-list>
                </div>
                <h2>Tag</h2>
                <div class="demo-content">
                    <z-list header="small">
                        <z-list-item :link="false">
                            <z-tag v-for="(item, index) in tagData" :key="index" :type="item" size="small" text="标签" slot="content"></z-tag>
                        </z-list-item>
                    </z-list>
                    <z-list header="middle">
                        <z-list-item>
                            <z-tag v-for="(item, index) in tagData" :key="index" :type="item" text="标签" slot="content"></z-tag>
                        </z-list-item>
                    </z-list>
                    <z-list header="big">
                        <z-list-item>
                            <z-tag v-for="(item, index) in tagData" :key="index" :type="item" size="big" text="标签" slot="content"></z-tag>
                        </z-list-item>
                    </z-list>
                    <z-list header="半圆标签">
                        <z-list-item>
                            <z-tag :mark="true" text="半圆标签" slot="content"></z-tag>
                        </z-list-item>
                    </z-list>
                    <z-list header="三角标签">
                        <z-list-item>
                            <z-tag :triangle="true" direction="left" text="三角标签" slot="content"></z-tag>
                            <z-tag :triangle="true" direction="right" text="三角标签" slot="content"></z-tag>
                        </z-list-item>
                    </z-list>
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

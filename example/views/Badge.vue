<template>
    <flexview>
        <scrollview title="Badge">
            <div class="demo-body">
                <h2>基本</h2>
                    <oreo-badge dot>
                        <a href="javascript:;" class="demo-badge"></a>
                    </oreo-badge>

                    <oreo-badge :count="280">
                        <a href="javascript:;" class="demo-badge"></a>
                    </oreo-badge>

                    <oreo-badge text="New">
                        <a href="javascript:;" class="demo-badge"></a>
                    </oreo-badge>

                    <oreo-badge text="Hot">
                        <a href="javascript:;" class="demo-badge"></a>
                    </oreo-badge>
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
.demo-badge {
  width: 42px;
  height: 42px;
  background: #fff;
  border-radius: 6px;
  display: inline-block;
}
</style>

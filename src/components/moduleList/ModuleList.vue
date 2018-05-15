<template>
  <z-cell-group header="" :line="false">
      <z-cell v-for="(item,idx) in modules" :key="idx" 
                        :title="item.name" 
                        link>
          <img :src="item.imagePath" alt="" slot="icon">
      </z-cell>

  </z-cell-group>
</template>
<script>
import '@oreoUI/rem/oreo-list.css'
import ZCellGroup from 'package/components/cell-group'
import ZCell from 'package/components/cell'
export default {
    name: 'ModuleList',
    components: {
        ZCellGroup,
        ZCell
    },
    props: {
        modules: Array
    }
}
</script>
<style lang="less">

</style>

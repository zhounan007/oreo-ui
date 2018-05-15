<template>
  <flexview>
    <scrollview title="Tag">
      <div class="demo-body">
        <h2>small</h2>
        <div class="demo-content">
          <z-tag-group size="small">
            <z-tag v-for="(item, index) in data" :key="index" :type="item">{{item}}</z-tag>
          </z-tag-group>
        </div>
        <h2>middle</h2>
        <div class="demo-content">
          <z-tag-group size="middle">
            <z-tag v-for="(item, index) in data " :key="index" :type="item">{{item}}</z-tag>
          </z-tag-group>
        </div>
        <h2>big</h2>
        <div class="demo-content">
          <z-tag-group size="big">
            <z-tag v-for="(item, index) in data" :key="index" :type="item">{{item}}</z-tag>
          </z-tag-group>
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
      data: ['default', 'red', 'blue', 'green', 'purple', 'orange']
    }
  }
}
</script>

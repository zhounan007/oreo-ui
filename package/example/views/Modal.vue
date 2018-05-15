
<template>
    <flexview>
        <scrollview title="Modal 弹窗" sub-title="支持各种形态">
            <div class="demo-body demo-wrap" >
                <h2>
                    Position
                </h2>
                <z-button v-for="position in ['top','right','bottom','left']" :key="position" small @click="clickByEdge(position)">Modal from {{position}}</z-button>
    
                <h2>
                    Size
                </h2>
                <z-button v-for="size in ['max','min']" :key="size" small @click="clickBySize(size)">{{size}}</z-button>
            </div>

            <z-modal ref="modalEdge" :position="position">
                <h3>Modal</h3>
                <div>
                    Display from {{position}}
                </div>
                <z-button type="primary" @click="$refs.modalEdge.close()" inline small>Close</z-button>
            </z-modal>
            <z-modal ref="modalSize" :max="max"  @open="testOpen()" @close="testClose()">
                <h3>Modal</h3>
                <div style="padding:1rem;">
                    {{max?'Max':'Min'}} Modal
                </div>
                <z-button type="primary" @click="$refs.modalSize.close()" inline small>Close</z-button>
            </z-modal>
        </scrollview>
    </flexview>
</template>
<script>
import flexview from './flexview'
import scrollview from './scrollview'
export default {
    name: 'modal',
    data() {
        return {
            edges: [{
                position: 'top',
                text: 'Modal from Top'
            }, {
                position: 'right',
                text: 'Modal from Right'
            }, {
                type: '',
                text: 'Modal from Bottom'
            }, {
                type: '',
                text: 'Modal from Left'
            }],
            position: '',
            max: false
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        clickByEdge(position) {
            console.log(position)
            this.position = position
            this.openModal('modalEdge')
        },
        clickBySize(size) {
            this.max = size === 'max'
            this.openModal('modalSize')
        },
        openModal(id) {
            this.$nextTick(() => {
                this.$refs[id].open(() => {
                    console.log('Modal open callback...')
                })
            })
        },
        testOpen() {
            console.log('Open ...')
        },
        testClose() {
            console.log('Close ...')
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

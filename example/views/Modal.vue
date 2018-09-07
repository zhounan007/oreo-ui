
<template>
    <flexview>
        <scrollview title="Modal 弹窗" sub-title="支持各种形态">
            <div class="demo-body demo-wrap" >
                <h2>
                    Position
                </h2>
                <oreo-button v-for="position in ['top','right','bottom','left']" :key="position" small @click="clickByEdge(position)">Modal from {{position}}</oreo-button>
    
                <h2>
                    Size
                </h2>
                <oreo-button v-for="size in ['max','min']" :key="size" small @click="clickBySize(size)">{{size}}</oreo-button>

                <oreo-button small @click="clickByMethod">Modal By v-model</oreo-button>

                <oreo-button small @click="clickByModalX">ModalX</oreo-button>
            </div>

            <oreo-modal ref="modalEdge" :position="position" :mask="false">
                <h3>Modal</h3>
                <div>
                    Display from {{position}}
                </div>
                <oreo-button type="primary" @click="$refs.modalEdge.close()" inline small>Close</oreo-button>
            </oreo-modal>
            <oreo-modal ref="modalSize" :max="max"  @open="testOpen()" @close="testClose()">
                <h3>Modal</h3>
                <div style="padding:1rem;">
                    {{max?'Max':'Min'}} Modal
                </div>
                <oreo-button type="primary" @click="$refs.modalSize.close()" inline small>Close</oreo-button>
            </oreo-modal>

             <oreo-modal v-model="show" position="top" ref="modalX">
                <h3>Modal</h3>
                <div style="padding:1rem;">
                    {{max?'Max':'Min'}} Modal
                </div>
                <oreo-button type="primary" @click="closeModal" inline small>Close</oreo-button>
            </oreo-modal>
           
           <oreo-modalX v-model="modalx" @click-overlay="clickOverlay">
               <div style="background-color:#fff;padding:0.5rem;text-align:center;">
                   我是插入内容
               </div>
           </oreo-modalX>
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
            show: false,
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
            max: false,
            modalx: false
        }
    },
    components: {
        flexview,
        scrollview
    },
    methods: {
        closeModal() {
            // this.show = false
            this.$refs.modalX.close()
        },
        clickByMethod() {
            this.show = true
        },
        clickByModalX() {
            this.modalx = true
        },
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
        },
        clickOverlay() {
            console.log('click overlay...')
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

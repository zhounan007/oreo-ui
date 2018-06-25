<template>
    <z-modal position="bottom" v-model="show" @close="handleClose" :mask="mask">
        <div :class="classNames" slot="inner">
        <slot name="title">
            <div class="number-keyboard__title" v-if="title && theme!=='friday'" v-text="title"></div>
        </slot>
        <div class="number-keyboard__body">
            <div class="number-keyboard__row" v-for="(row, index) in keys" :key="index">
                <z-number-key v-for="(item,idx ) in row" :key="idx"
                :type="item.type"
                :text="item.text" @press="handleKey"></z-number-key>   
            </div>
        </div>
        <div class="number-keyboard__sidebar" v-if="theme==='friday' ">
             <z-number-key  :type="['del']" @press="handleKey"></z-number-key>   
             <z-number-key  :type="['confirm']" :text="doneButtonText || t('oreo.numberKeyboard.doneButtonText')" @press="handleKey"></z-number-key>  
        </div>
        </div>
    </z-modal>    
</template>
<script>
import createBasic from '../utils/create-basic'
import ZModal from '../modal'
import ZNumberKey from './ZNumberKey'
import { chunk } from '../utils/index'
const prefix = 'number-keyboard'
export default createBasic({
    name: `${prefix}`,
    components: {
        ZModal,
        ZNumberKey
    },
    props: {
        title: String,
        value: Boolean,
        theme: {
            type: String,
            default: 'default'
        },
        extraKey: {
            type: String,
            default: '.'
        },
        doneButtonText: String,
        mask: {
            type: Boolean,
            default: false
        },
        closeOnClickModal: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        classNames() {
            return {
                'oreo-modal-content': true,
                [`${prefix}`]: true,
                [`${prefix}_friday`]: this.theme === 'friday'
            }
        },
        show: {
            get() {
                return !!this.value
            },
            set(val) {

            }
        },
        keys() {
            const keys = []
            for (let i = 1; i <= 9; i++) {
                keys.push({ text: i })
            }
            switch (this.theme) {
                case 'default':
                    keys.push(
                        { text: this.extraKey },
                        { text: 0 },
                        { text: 'del', type: ['del'] }
                    )
                    break;
                case 'friday':
                    keys.push(
                        { text: 0, type: ['middle'] },
                        { text: this.extraKey }
                    )
                    break;
            }
            return chunk(keys, 3)
        }
    },
    methods: {
        handleClose() {
            this.$emit('input', false)
        },
        handleKey(text) {
            if (text === '') return
            if (text === 'del') {
                this.$emit('delete')
            } else if (text === this.doneButtonText) {
                this.$emit('done')
            } else {
                this.$emit('input', text)
            }
        }
    }
})
</script>
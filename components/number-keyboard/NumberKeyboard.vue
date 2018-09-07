<template>
    <!-- <z-modal position="bottom" v-model="show" @close="handleClose" :mask="mask">
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
    </z-modal>    -->

    <oreo-popup position="bottom" :overlay="false" v-model="visible" >
        <div :class="b({
            friday:theme ==='friday'
        })" >
            <slot name="title">
                <div :class="[b('title'),active?'number-keyboard__key_active':'']" v-if="theme!=='friday'"  
                    @touchstart.stop.prevent="handleFocus" 
                    @touchend="handleBlur"
                    @touchcancel="handleBlur">
                    <span></span>
                </div>
            </slot>
            <div :class="b('body')">
                <div :class="b('row')" v-for="(row, index) in keys" :key="index">
                    <oreo-number-key v-for="(item,idx ) in row" :key="idx"
                    :type="item.type"
                    :text="item.text" @press="handleKey"></oreo-number-key>   
                </div>
            </div>
            <div :class="b('sidebar')" v-if="theme==='friday' ">
                <oreo-number-key  :type="['del']" text="" @press="handleKey"></oreo-number-key>   
                <oreo-number-key  :type="['confirm']" :text="doneButtonText" @press="handleKey"></oreo-number-key>  
            </div>
        </div>
    </oreo-popup> 
</template>
<script>
import createBasic from '../utils/create-basic'
// import ZModal from '../modal'
import OreoPopup from '../popup'
import OreoNumberKey from './NumberKey'
import { chunk } from '../utils/index'
import { t } from '../locale'
const prefix = 'number-keyboard'
export default createBasic({
    name: 'number-keyboard',
    components: {
        // ZModal,
        OreoPopup,
        OreoNumberKey
    },
    data() {
        return {
            active: false
        }
    },
    props: {
        // title: String,
        show: Boolean,
        theme: {
            type: String,
            default: 'default'
        },
        extraKey: {
            type: String,
            default: '.'
        },
        doneButtonText: {
            type: String,
            default: () => {
                return t('oreo.numberKeyboard.doneButtonText')
            }
        },
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
        // classNames() {
        //     return {
        //         // 'oreo-modal-content': true,
        //         [`${prefix}`]: true,
        //         [`${prefix}_friday`]: this.theme === 'friday'
        //     }
        // },
        // titleClassNames() {
        //     return {
        //         [`${prefix}__title`]: true,
        //         [`${prefix}__key_active`]: this.active
        //     }
        // },
        visible: {
            get() {
                return !!this.show
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
                        { text: this.extraKey, type: ['dot'] },
                        { text: 0 },
                        { text: '', type: ['del'] }
                    )
                    break;
                case 'friday':
                    keys.push(
                        { text: 0, type: ['middle'] },
                        { text: this.extraKey, type: ['dot'] }
                    )
                    break;
            }
            return chunk(keys, 3)
        }
    },
    methods: {
        handleKey(text) {
            if (text === '') return
            if (text === 'del') {
                this.$emit('delete')
            } else if (text === this.doneButtonText) {
                this.$emit('done')
            } else {
                this.$emit('input', text)
            }
        },
        handleFocus() {
            this.active = true
            this.$emit('done')
        },
        handleBlur() {
            this.active = false
        }
    }
})
</script>
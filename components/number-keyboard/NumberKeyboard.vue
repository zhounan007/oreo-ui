<template>
    <oreo-popup position="bottom" :overlay="overlay" v-model="visible" @click-overlay="handleOverlay">
        <div :class="b({
            friday:theme ==='friday'
        })" >
            <slot name="title">
                <div :class="[b('title'),active?'oreo-number-keyboard__key_active':'']" v-if="theme!=='friday'"  
                    @touchstart.stop.prevent="handleFocus" 
                    @touchend="handleBlur"
                    @touchcancel="handleBlur">
                    <span></span>
                </div>
            </slot>
            <slot name="password">
            </slot>
            <div :class="b('body')">
                <div :class="b('row')" v-for="(row, index) in keys" :key="index">
                    <oreo-number-key v-for="(item,idx ) in row" :key="idx"
                    :type="item.type"
                    :text="item.text" @press="handleKey"></oreo-number-key>   
                </div>
            </div>
            <div :class="b('sidebar')" v-if="theme==='friday' ">
                <oreo-number-key  :type="['del']" text="del" @press="handleKey"></oreo-number-key>   
                <oreo-number-key  :type="['confirm']" :text="doneButtonText" @press="handleKey"></oreo-number-key>  
            </div>
        </div>
    </oreo-popup> 
</template>
<script>
import createBasic from 'oreo-ui/components/utils/create-basic'
// import ZModal from '../modal'
import OreoPopup from 'oreo-ui/components/popup'
import OreoNumberKey from './NumberKey'
import { chunk, shuffle } from 'oreo-ui/components/utils/index'
import { t } from 'oreo-ui/components/locale'
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
        overlay: {
            type: Boolean,
            default: false
        },
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
        random: {
            type: Boolean,
            default: false
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
            if (this.random) {
                shuffle(keys)
            }
            switch (this.theme) {
                case 'default':
                    keys.push(
                        { text: this.extraKey, type: ['gray'] },
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
        handleOverlay() {
            if (this.overlay) {
                this.$emit('click-overlay')
                // this.$emit('input', false)
            }
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
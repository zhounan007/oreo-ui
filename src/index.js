import ZButton from '@c/button'
import {
    ZFlex,
    ZFlexItem
} from '@c/flex'
import {
    ZGrid,
    ZGridItem
} from '@c/grid'
import {
    ZModal
} from '@c/modal'
import {
    ZIcon
} from '@c/icon'
import ZToast from '@c/toast'
import ZLoading from '@c/loading'
import ZDialog from '@c/dialog'
import {
    ZInput,
    ZTextarea,
    ZSwitch,
    ZFormGroup
} from '@c/form'
import {
    ZList,
    ZListItem,
    ZMediaItem
} from '@c/list'
import {
    ZScroll
} from '@c/scroll'
import {
    ZTabs,
    ZTabPane,
    ZTabBar
} from '@c/tabs'
import {
    ZSticky,
    ZStickyContainer
} from '@c/sticky'
import {
    ZSkeleton
} from '@c/skeleton'
import ZCheckBox from '@c/checkBox'
import ZRadio from '@c/radio'
import ZCard from '@c/card'
import ZCell from '@c/cell'
import ZCellGroup from '@c/cell-group'
import ZActionsheet from '@c/actionsheet'
import {
    ZNewsCard,
    ZTextCard,
    ZMultiImgCard
} from '@c/news-card'
const components = {
    ZButton,
    ZFlex,
    ZFlexItem,
    ZGrid,
    ZGridItem,
    ZModal,
    ZIcon,
    ZInput,
    ZTextarea,
    ZSwitch,
    ZFormGroup,
    ZList,
    ZListItem,
    ZMediaItem,
    ZScroll,
    ZTabs,
    ZTabPane,
    ZTabBar,
    ZSticky,
    ZStickyContainer,
    ZSkeleton,
    ZCheckBox,
    ZRadio,
    ZCard,
    ZActionsheet,
    ZCell,
    ZCellGroup,
    ZNewsCard,
    ZTextCard,
    ZMultiImgCard
}

const install = function (Vue, opts = {}) {
    Object.keys(components).forEach((key) => {
        Vue.component(components[key].name, components[key])
    })

    Vue.prototype.$toast = ZToast
    Vue.prototype.$loading = ZLoading
    Vue.prototype.$dialog = ZDialog
    Vue.prototype.$alert = ZDialog.alert
    Vue.prototype.$confirm = ZDialog.confirm
}

// install
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default Object.assign(components, {
    install
})

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

const components = {
  ZButton,
  ZFlex,
  ZFlexItem,
  ZGrid,
  ZGridItem,
  ZModal,
  ZIcon
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

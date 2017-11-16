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
}

// install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(components, {
  install
})

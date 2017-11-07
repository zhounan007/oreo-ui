import ZButton from '../components/button'
import {
  pageScroll
} from './libs/utils.js'
const components = {
  ZButton
}

const install = function (Vue, opts = {}) {
  Object.keys(components).forEach((key) => {
    Vue.component(components[key].name, components[key])
  })
}

// install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default Object.assign(components, {
  install
})

import Vue from 'vue'
import ZToast from './Toast.vue'
import { isObj } from '../utils'

let queue = []
let singleton = true

function initInstance() {
  if (!queue.length || !singleton) {
    const toast = new (Vue.extend(ZToast))({
      el: document.createElement('div')
    })
    document.body.appendChild(toast.$el)
    queue.push(toast)
  }
  return queue[queue.length - 1]
}

function Toast(options = {}) {
  const toast = initInstance()

  options = isObj(options) ? options : { message: options }
  options = {
    ...Toast.currentOptions,
    ...options,
    clear() {
      toast.value = false
    }
  }
  Object.assign(toast, options)
  clearTimeout(toast.timer)

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear()
    }, options.duration)
  }
  return toast
}
Toast.defaultOptions = {
  type: '',
  message: '',
  value: true,
  duration: 3 * 1000,
  mode: 'vertical',
  loadingType: 'circle',

  overlay: false,
  overlayStyle: {
    background: 'transparent'
  },
  closeOverlayByClick: false
}
Toast.setDefaultOptions = options => {
  Object.assign(Toast.currentOptions, options)
}
Toast.resetDefaultOptions = () => {
  Toast.currentOptions = { ...Toast.defaultOptions }
}
Toast.clear = (all) => {
  if (queue.length) {
    if (all) {
      queue.forEach(toast => {
        toast.clear()
      })
    } else if (singleton) {
      queue[0].clear()
    } else {
      queue.shift().clear()
    }
  }
}

Toast.allowMultiple = (allow = true) => {
  singleton = !allow
}

['success', 'fail', 'loading'].forEach(type => {
  Toast[type] = options => {
    if (typeof options === 'string') {
      options = {
        message: options
      }
    }
    options.type = type
    return Toast(options)
  }
})

Toast.install = () => {
  Vue.use(ZToast)
}
Toast.resetDefaultOptions()
Vue.prototype.$toast = Toast
export default Toast

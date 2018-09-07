import Vue from 'vue'
import ZDialog from './Dialog.vue'
// 实例
let instance
//  多个dialog 配置 数组
let dialogQueue = []
// 当前配置
let currentDialog

const initInstance = () => {
  instance = new (Vue.extend(ZDialog))({
    el: document.createElement('div')
  })
  instance.$on('input', val => {
    instance.value = val
  })
  document.body.appendChild(instance.$el);
}

const showNextDialog = () => {
  if (!instance) {
    initInstance()
  }
  // 是否是激活状态
  if (!instance.value) {
    if (dialogQueue.length > 0) {
      if (currentDialog) return

      currentDialog = dialogQueue.shift()

      Object.assign(instance, currentDialog)
      if (currentDialog.callback === undefined) {
        instance.callback = Dialog.defaultCallback
      }
      let oldCallback = instance.callback
      instance.callback = (action, instance) => {
        oldCallback(action, instance)
        showNextDialog()
      }
      Vue.nextTick(() => {
        instance.value = true
      })
      return instance
    }
  }
}

const Dialog = (options = {}) => {
  return new Promise((resolve, reject) => {
    let opts = Object.assign({}, Dialog.currentOptions, options)
    dialogQueue.push({
      resolve,
      reject,
      ...opts
    })
    showNextDialog()
  })
}

Dialog.defaultOptions = {
  title: '',
  message: '',
  theme: 'ios',
  okButtonText: '确定',
  cancelButtonText: '取消',

  showOkButton: true,
  showCancelButton: false,
  closeOverlayByClick: false,
  lockScroll: true
}
Dialog.defaultCallback = action => {
  if (currentDialog) {
    if (currentDialog.resolve) {
      currentDialog[action === 'ok' ? 'resolve' : 'reject'](action)
    }
    currentDialog = null
  }
}
Dialog.close = () => {
  if (instance) {
    instance.value = false
  }
}

Dialog.setDefaultOptions = options => {
  Object.assign(Dialog.currentOptions, options)
}

Dialog.resetDefaultOptions = () => {
  Dialog.currentOptions = { ...Dialog.defaultOptions }
}

Dialog.install = () => {
  Vue.use(ZDialog)
}

Vue.prototype.$dialog = Dialog
Dialog.resetDefaultOptions();

['alert', 'confirm'].forEach(type => {
  Dialog[type] = (options = {}) => {
    return Dialog({
      ...Dialog.currentOptions,
      showCancelButton: type === 'confirm',
      ...options
    })
  }
})

export default Dialog

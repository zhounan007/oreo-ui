import Vue from 'vue'
import dialogVue from './ZDialog.vue'

const DialogConstructor = Vue.extend(dialogVue)
const defaults = {
  title: '',
  message: '',
  type: '', // alert, confirm
  theme: '', // ios,android
  okButtonText: '确定',
  cancelButtonText: '取消'
}
let instance
let msgQueue = []
let currentMsg

const defaultCallback = action => {
  if (currentMsg) {
    let callback = currentMsg.callback
    if (typeof callback === 'function') {
      callback(action)
    }

    if (currentMsg.resolve) {
      if (action === 'ok') {
        currentMsg.resolve(action)
      } else {
        currentMsg.reject(action)
      }
    }
    currentMsg = null
  }
}

const initInstance = () => {
  instance = new DialogConstructor({
    el: document.createElement('div')
  })

  instance.callback = defaultCallback
}

const showNextDialog = () => {
  if (!instance) initInstance()
  instance.action = ''
  if (!instance.visible) {
    if (msgQueue.length > 0) {
      // FirstIn FirstOut
      if (currentMsg) return
      currentMsg = msgQueue.shift()

      let options = currentMsg.options
      for (let prop in options) {
        if (options.hasOwnProperty(prop)) {
          instance[prop] = options[prop]
        }
      }
      if (options.callback === undefined) {
        instance.callback = defaultCallback
      }

      let oldCallback = instance.callback
      instance.callback = (action, instance) => {
        oldCallback(action, instance)
        showNextDialog()
      }

      document.body.appendChild(instance.$el)
      Vue.nextTick(() => {
        instance.visible = true
      })
      return instance
    }
  }
}

const Dialog = (options, callback) => {
  if (typeof options === 'string') {
    options = {
      message: options
    }
    if (arguments[1]) {
      options.title = arguments[1]
    }
    if (arguments[2]) {
      options.type = arguments[2]
    }
  } else if (options.callback && !callback) {
    callback = options.callback
  }
  if (typeof Promise !== 'undefined') {
    return new Promise((resolve, reject) => {
      msgQueue.push({
        options: Object.assign({}, defaults, options),
        callback,
        resolve,
        reject
      })
      showNextDialog()
    })
  } else {
    msgQueue.push({
      options: Object.assign({}, defaults, options),
      callback
    })
    showNextDialog()
  }
  // debugger
  // instance = new DialogConstructor({
  //   data: options
  // }).$mount()
}

['alert', 'confirm'].forEach(type => {
  Dialog[type] = (msg, title, options) => {
    if (typeof title === 'object') {
      options = title
      title = ''
    }
    const defaults = {
      title: title,
      message: msg,
      type: type
    }
    return Dialog(Object.assign(defaults, options))
  }
})

export default Dialog

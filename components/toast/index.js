import Vue from 'vue'
import toast from './toast.vue'

let ToastConstructor = Vue.extend(toast)

let instance
let instances = []
let idx = 1

let Toast = (options) => {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      message: options
    }
  }

  let onClose = options.onClose
  let id = 'toast-' + idx++

    options.onClose = function () {
      Toast.close(id, onClose)
    }

  instance = new ToastConstructor({
    data: options
  })
  instance.id = id
  instance.vm = instance.$mount()

  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true

  instance.dom = instance.vm.$el
  instances.push(instance)

  return instance.vm
}

['success', 'failure', 'loading'].forEach(type => {
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

Toast.close = (id, onClose) => {
  for (let i = 0, len = instances.length; i < len; i++) {
    if (id === instances[i].id) {
      if (typeof onClose === 'function') {
        onClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
}

Toast.closeAll = () => {
  for (let i = instances.length - 1; i >= 0; i--) {
    instances[i].close()
  }
}

export default Toast

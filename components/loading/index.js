import Vue from 'vue'
import loadingVue from './ZLoading.vue'

const LoadingConstructor = Vue.extend(loadingVue)

const defaults = {
  message: '',
  fullscreen: true,
  mask: true,
  mode: 'vertical' // vertical horizontal
}

let fullscreenLoading

LoadingConstructor.prototype.close = function () {
  if (this.fullscreen) {
    fullscreenLoading = undefined
  }

  this.$on('after-leave', () => {
    this.$el && this.$el.parentNode && this.$el.parentNode.removeChild(this.$el)
    this.$destroy()
  })

  this.visible = false
}

/**
 * fullscreen 下,loading为单例模式
 * @param {object} option
 */
let Loading = (option) => {
  option = option || {}
  if (typeof option === 'string') {
    option = {
      message: option
    }
  }
  option = {
    ...defaults,
    ...option
  }
  if (option.fullscreen && fullscreenLoading) {
    return fullscreenLoading
  }

  let instance = new LoadingConstructor({
    el: document.createElement('div'),
    data: option
  })

  document.body.appendChild(instance.$el)
  Vue.nextTick(() => {
    instance.visible = true
  })
  if (option.fullscreen) {
    fullscreenLoading = instance
  }
  return instance
}

export default Loading

import Touch from './ZTouch'
import {
  config,
  customEvents
} from './utils'

let installed = false
const ZTouch = {
  config,
  customEvents
}

ZTouch.install = function (Vue, opts = {}) {
  const name = opts.name || 'z-touch'
  Vue.component(name, Object.assign(Touch, {
    name
  }))
  installed = true
}

ZTouch.registerCustomEvent = function (event, options = {}) {
  if (installed) {
    console.warn(`[z-touch]: Custom Event '${event}' couldn't be added to z-touch.
      Custom Events have to be registered before installing the plugin.`)
  }
  options.event = event
  customEvents[event] = options
}

ZTouch.component = Touch

  /* eslint-disable */
if (typeof exports == "object") {
  module.exports = ZTouch
} else if (typeof define == "function" && define.amd) {
  define([], function () {
    return ZTouch
  })
} else if (typeof window !== 'undefined' && window.Vue) {
  window.ZTouch = ZTouch

  Vue.use(ZTouch)
}

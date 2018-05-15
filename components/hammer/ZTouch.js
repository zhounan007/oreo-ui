import Hammer from 'hammerjs'
import {
  createProp,
  capitalize,
  directions,
  gestureMap,
  gestures,
  customEvents,
  config,
  guardDirections
} from './utils.js'

export default {
  name: 'z-touch',
  data() {
    return {}
  },
  props: {
    options: createProp(),
    tapOptions: createProp(),
    panOptions: createProp(),
    pinchOptions: createProp(),
    pressOptions: createProp(),
    rotateOptions: createProp(),
    swipeOptions: createProp(),
    tag: {
      type: String,
      default: 'div'
    },
    enabled: Boolean
  },
  mounted() {
    if (!this.$isServer) {
      this.hammer = new Hammer.Manager(this.$el, this.options)
      this.recognizers = {}

      this.setupBuiltinRecognizers()
      this.setupCustomRecognizers()
    }
  },
  destroyed() {
    if (!this.$isServer) {
      this.hammer.destroy()
    }
  },
  render(h) {
    return h(this.tag, {}, this.$slots.default)
  },
  methods: {
    setupBuiltinRecognizers() {
      for (let i = 0; i < gestures.length; i++) {
        const gesture = gestures[i]
        if (this._events[gesture]) {
          const mainGesture = gestureMap[gesture]

          const options = Object.assign({}, (config[mainGesture || {}]), this[`${mainGesture}`])
          this.addRecognizer(mainGesture, options)
          this.addEvent(gesture)
        }
      }
    },
    setupCustomRecognizers() {
      const gestures = Object.keys(customEvents)
      for (let i = 0; i < gestures.length; i++) {
        const gesture = gestures[i]
        if (this._events[gesture]) {
          const opts = customEvents[gesture]

          const localCustomOpts = this[`${gesture}Options`] || {}
          const options = Object.assign({}, opts, localCustomOpts)
          this.addRecognizer(gesture, options)
          this.addEvent(gesture)
        }
      }
    },
    addRecognizer(gesture, options, {
      mainGesture
    } = {}) {
      if (!this.recognizers[gesture]) {
        const recognizer = new Hammer[capitalize(mainGesture || gesture)](guardDirections(options))

        this.recognizers[gesture] = recognizer
        this.hammer.add(recognizer)
        recognizer.recognizeWith(this.hammer.recognizers)
      }
    },
    addEvent(gesture) {
      this.hammer.on(gesture, (e) => {
        this.$emit(gesture, e)
      })
    },
    updateEnabled(newVal, oldVal) {
    },
    enable(r) {
    },
    disable(r) {
    },
    enableAll() {
    },
    disableAll() {
    },
    toggle() {
    },
    toggleAll() {
    },
    isEnable() {
    }
  }
}

// https://github.com/vuejs/vue-touch/blob/next/src/component.js

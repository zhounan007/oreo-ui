import Hammer from 'hammerjs'

export function createProp() {
  return {
    type: Object,
    default: function () {
      return {}
    }
  }
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export const directions = ['up', 'down', 'left', 'right', 'horizontal', 'vertical', 'all']

export const gestureMap = {
  pan: 'pan',
  panstart: 'pan',
  panmove: 'pan',
  panend: 'pan',
  pancancel: 'pan',
  panleft: 'pan',
  panright: 'pan',
  panup: 'pan',
  pandown: 'pan',
  pinch: 'pinch',
  pinchstart: 'pinch',
  pinchmove: 'pinch',
  pinchend: 'pinch',
  pinchcancel: 'pinch',
  pinchin: 'pinch',
  pinchout: 'pinch',
  press: 'press',
  pressup: 'press',
  rotate: 'rotate',
  rotatestart: 'rotate',
  rotatemove: 'rotate',
  rotateend: 'rotate',
  rotatecancel: 'rotate',
  swipe: 'swipe',
  swipeleft: 'swipe',
  swiperight: 'swipe',
  swipeup: 'swipe',
  swipedown: 'swipe',
  tap: 'tap'
}

export const gestures = [
  'pan', 'panstart', 'panmove', 'panend', 'pancancel', 'panleft', 'panright', 'panup', 'pandown',
  'pinch', 'pinchstart', 'pinchmove', 'pinchend', 'pinchcancel', 'pinchin', 'pinchout',
  'press', 'pressup',
  'rotate', 'rotatestart', 'rotatemove', 'rotateend', 'rotatecancel',
  'swipe', 'swipeleft', 'swiperight', 'swipeup', 'swipedown',
  'tap'
]
export function guardDirections(options) {
  const dir = options.direction
  if (typeof dir === 'string') {
    const hammerDir = 'DIRECTION_' + dir.toUpperCase()
    if (directions.indexOf(dir) > -1 && Hammer.hasOwnProperty(hammerDir)) {
      options.direction = Hammer[hammerDir]
    } else {
      console.warn('[z-touch] invalid direction:' + dir)
    }
  }
  return options
}
export const customEvents = {}

export const config = {}

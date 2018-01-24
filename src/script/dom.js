/**
 * @param {element} el
 */
export function getRect(el) {
  if (el instanceof window.SVGElement) {
    var rect = el.getBoundingClientRect()
    return {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    }
  } else {
    return {
      top: el.offsetTop,
      left: el.offsetLeft,
      width: el.offsetWidth,
      height: el.offsetHeight
    }
  }
}
/**
 * @param {element} el
 * @param {object} css
 */
export function css(el, css) {
  let style = el.style

  Object.keys(css).forEach((prop) => {
    style[prop] = css[prop]
  })
}
/**
 * ready函数
 * @param {function} fn
 */
export function ready(fn) {
  if (typeof fn !== 'function') {
    return
  }
  if (document.readyState === 'complete') {
    return fn()
  }
  document.addEventListener('DOMContentLoaded', fn, false)
}

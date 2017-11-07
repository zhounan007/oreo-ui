export function css(el, css) {
  let style = el.style

  Object.keys(css).forEach((prop) => {
    style[prop] = css[prop]
  })
}

export function ready(fn) {
  if (typeof fn !== 'function') {
    return
  }
  if (document.readyState === 'complete') {
    return fn()
  }
  document.addEventListener('DOMContentLoaded', fn, false)
}

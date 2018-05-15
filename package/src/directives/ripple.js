function abort() {
  return false
}

function showRipple(evt, el, modifiers) {

  let container = document.createElement('span')
  let animNode = document.createElement('span')

  container.appendChild(animNode)
  container.className = 'zui-ripple-container'
}

function hideRipple() {

}

export default {
  name: 'ripple',
  inserted(el, {
    value,
    modifiers
  }) {
    if (abort()) {
      return
    }

    function show(evt) {
      if (ctx.enabled) {
        showRipple(evt, el, modifiers)
      }
    }

    function hide(evt) {
      if (ctx.enabled) {
        hideRipple(evt)
      }
    }

    const ctx = {
      enabled: value! == false
    }
    const handlers = {
      touchstart: show,
      touchend: hide,
      touchcancel: hide,

      mousedown: show,
      mouseup: hide,
      mouseleave: hide
    }

    ctx.handlers = handlers

    el.__ripple = ctx

    Object.keys(handlers).forEach((evt) => {
      el.addEventListener(evt, handlers[evt], false)
    })
  },
  update(el, {
    value,
    oldValue
  }) {
    if (el.__ripple && value !== oldValue) {
      el.__ripple.enabled = value !== false
    }
  },
  unbind(el, {
    modifiers
  }) {
    const ctx = el.__ripple
    Object.keys(ctx.handlers).forEach((evt) => {
      el.removeEventListener(evt, ctx.handlers[evt], false)
    })

    delete el.__ripple
  }
}

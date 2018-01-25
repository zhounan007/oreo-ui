export default {
  name: 'sticky',
  bind(el, binding) {
    let p = document.createElement('div')
    p.appendChild(el)
    console.log('bind: el.height ' + el.clientHeight)
  },
  inserted(el, binding) {
    console.log('inserted: el.height' + el.clientHeight)
  },
  update(el, binding) {
    console.log('update: el.height' + el.clientHeight)
  },
  componentUpdated(el, binding) {
    console.log('componentUpdated: el.height' + el.clientHeight)
  },
  unbind(el, binding) {
    console.log('unbind: el.height' + el.clientHeight)
  }
}

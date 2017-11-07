const content = require.context('./', true, /\.(vue)$/)
const components = {}
content.keys().forEach(function (key) {
  console.log(key)
  const c = content(key)
  key = key.substring(key.lastIndexOf('./') + 2)
  if (key === 'flexview.vue' || key === 'scrollview.vue') {

  } else {
    components[key] = c
  }
})
export {
  components as
  default
}

const content = require.context('./icons', true, /\.(svg)$/)
const files = {}
content.keys().forEach(function (key) {
  const c = content(key)
  key = key.substring(key.lastIndexOf('./') + 2)
  files[key] = c
})
export {
  files as
  default
}

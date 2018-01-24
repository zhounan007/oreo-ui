// const content = require.context('./', true, /\.(vue)$/)
// const components = {}
// content.keys().forEach(function (key) {
//   console.log(key)
//   const c = content(key)
//   key = key.substring(key.lastIndexOf('./') + 2)
//   if (key === 'flexview.vue' || key === 'scrollview.vue') {

//   } else {
//     components[key] = c
//   }
// })
// export {
//   components as
//   default
// }
export default require.context('./', true, /\.(vue)$/).keys().filter(page => {
  let p
  let arry = page.split('/')

  p = arry[1]
  return p !== 'flexview.vue' && p !== 'scrollview.vue' && p !== 'Home.vue'
}).map(page => page.slice(2))

import Vue from 'vue'
import Router from 'vue-router'
import pages from './views/set'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('./views/Home')), 'Home')

const lazyLoading = (url) => () => import(`./views/${url}.vue`)

function component(path) {
  let name = path.slice(0, path.length - 4)
  return {
    path: '/' + name,
    // component: () => import(`./views/${path}`)
    // component: require(`./views/${path}`).default
    component: resolve => require([`./views/${path}`], resolve)
  }
}

const routes = [{
  path: '/',
  component: home
}]

pages.forEach(page => {
  routes.push(component(page))
})

console.log(JSON.stringify(pages))
export default new Router({
  routes
})

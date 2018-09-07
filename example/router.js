import Vue from 'vue'
import Router from 'vue-router'
import pages from './views/set'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('./views/Home')), 'Home')

function component(path) {
  return {
    path: '/' + path.slice(0, path.length - 4),
    component: () => import(`./views/${path}`)
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

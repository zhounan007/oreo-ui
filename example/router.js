import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import pages from './components/set'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('./components/Home')), 'Home')

function component(path) {
  return {
    path: '/' + path.slice(0, path.length - 4),
    component: () => import(`./components/${path}`)
  }
}

const routes = [{
  path: '/',
  component: home
}]

pages.forEach(page => {
  routes.push(component(page))
})

console.log(JSON.stringify(routes))
export default new Router({
  routes
})

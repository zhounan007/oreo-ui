import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import cpSet from './components/set'

Vue.use(Router)

// const home = r => require.ensure([], () => r(require('./components/Home')), 'Home')
const button = r => require.ensure([], () => r(require('./components/Button')), 'button')
const routes = [{
  path: '/',
  component: button
}]

Object.keys(cpSet).forEach((item, key) => {
  routes.push({
    path: '/' + item.split('.')[0],
    component: cpSet[item]
  })
})

// const home = r => require.ensure([], () => r(require('./components/home')), 'home')
// const icon = r => require.ensure([], () => r(require('./components/icon')), 'icon')
// const navbar = r => require.ensure([], () => r(require('./components/navbar')), 'navbar')
// const flex = r => require.ensure([], () => r(require('./components/flexbox')), 'flex')
// const grid = r => require.ensure([], () => r(require('./components/grid')), 'grid')
export default new Router({
  routes
  // routes: [{
  //   path: '/',
  //   component: home,
  // }, {
  //   path: '/icon',
  //   component: icon
  // }, {
  //   path: '/navbar',
  //   component: navbar
  // }, {
  //   path: '/flex',
  //   component: flex
  // }, {
  //   path: '/grid',
  //   component: grid
  // }]
})

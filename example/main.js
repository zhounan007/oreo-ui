// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import '@c/theme/lib/oreo_ui.rem.css'
import 'oreo-ui/components/theme-oreo/src/index.less'
import Vue from 'vue'
import App from './App'
import router from './router'
// import oreoVue from '@/index'
import oreoVue from '../components/index'
console.log(oreoVue)
// import locale from '@c/locale/lang/en-US'
Vue.config.productionTip = false
// Vue.use(oreoVue, { locale })
Vue.use(oreoVue)
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  render: v => v(App)
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@c/theme/lib/oreo_ui.rem.css'

import Vue from 'vue'
import App from './App'
import router from './router'
import oreoVue from '@/index'

Vue.config.productionTip = false
console.log(JSON.stringify(oreoVue))
Vue.use(oreoVue)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: v => v(App)
})

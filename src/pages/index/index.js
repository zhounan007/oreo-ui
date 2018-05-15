// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import i18n from '@/i18n'

import http from '@/service/http'
Vue.prototype.$http = http
// Vue.use(VueI18n)

// const i18n = new VueI18n({
//   locale: 'zh-CN',
//   messages: {
//       'zh-CN': require('@/i18n/lang/zh'),
//       'en-US': require('@/i18n/lang/en')
//   }
// })
Vue.config.productionTip = false

/* eslint-disable no-new */
document.title = "校园卡"
new Vue({
  el: '#app',
  i18n,
  router,
  components: { App },
  template: '<App/>'
})

import directive from './directive'
import service from './service'

export default {
    install(Vue) {
        Vue.prototype.$loading = service;
        Vue.use(directive)
    },
    directive,
    service
}

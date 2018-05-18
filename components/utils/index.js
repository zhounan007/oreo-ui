import Vue from 'vue'

const isServer = Vue.prototype.$isServer

function isAndroid() {
    return !isServer ? false : /android/.test(navigator.userAgent.toLowerCase())
}

export {
    isServer,
    isAndroid
}

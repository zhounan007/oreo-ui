import http from 'axios'
import qs from 'qs'

const debug = process.env.NODE_ENV !== 'production'

// http.defaults.baseURL = debug ? 'http://jobtest.17wanxiao.com/talents/h5' : '/talents/h5'
http.defaults.baseURL = debug ? '/test' : ''
// http.defaults.baseURL = debug ? 'http://192.168.157.158:8010' : '/'

http.defaults.timeout = 30 * 1000
http.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// http.defaults.headers.post['Content-Type'] = 'application/json'

http.interceptors.request.use((config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    return config
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

http.interceptors.response.use((res) => {
    return res
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})

export default http
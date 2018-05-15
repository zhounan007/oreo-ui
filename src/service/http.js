import qs from 'qs'
import http from '@/service/base.js'
import Toast from 'package/components/toast/index.js'
import Loading from 'package/components/loading'

const debug = process.env.NODE_ENV !== 'production'

const BASE_URL = '/ecardh5/bootcallback'
const API = {
    baseInfo: 'userInfo', // 用戶信息
    accountInfo: 'XYK_BASE_INFO',
    modifyPassword: 'XYK_MODIFY_PASSWORD',
    lostCard: 'XYK_LOST_CARD',
    trade: 'XYK_TRADE_DETAIL',
    checkIn: 'XYK_CHECK_IN',
    claim: 'XYK_CLAIM',
    signBank: 'XYK_SIGN_BANK',
    qc: 'XYK_QC',
    pay: 'pay',
    captcha: 'XYK_CAPTCHA',
    thirdWays: 'gateway',
    unbind: 'XYK_UNBIND'
}

const methods = {}

// 根据API key值生成调用方法
Object.keys(API).map((method, index) => {
    methods[method] = function (param = {}, callback = () => { }) {
        response((function (p) {
            p['gotowhere'] = API[method]
            return http.post(BASE_URL, p)
        })(param), callback)
    }
})


function response(promise, callback) {
    Loading({
        // message: '正在努力加载中...',
        mode: 'horizontal'
    })
    promise.then(res => {
        Loading().close()
        if (res.status === 200 && res.data.code_ === 0) {
            return callback && callback([res.status, res.data])
        }else {
            Toast(res.data.message)
        }

    }).catch(error => {
        Loading().close()
        console.log(qs.parse(error))
    })
}

export default methods
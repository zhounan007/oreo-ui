const ua = navigator.userAgent.toLowerCase()

const WANXIAO = 'wanxiao'
const ANDROID = 'android'
const IOS = 'ios'

const device = {
    ANDROID: ANDROID,
    IOS: IOS
}
device.ios = device.android = device.iphone = device.ipod = device.ipad = false

const android = ua.match(/(Android);?[\s/]+([\d.]+)?/)
const ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
const ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/)
const iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/)

// Android
if (android) {
    device.os = device.ANDROID
    device.osVersion = android[2]
    device.android = true
    device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0
}
if (ipad || iphone || ipod) {
    device.os = device.IOS
    device.ios = true
}
// iOS
if (iphone && !ipod) {
    device.osVersion = iphone[2].replace(/_/g, '.')
    device.iphone = true
}
if (ipad) {
    device.osVersion = ipad[2].replace(/_/g, '.')
    device.ipad = true
}
if (ipod) {
    device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null
    device.iphone = true
}
// iOS 8+ changed UA
if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
    if (device.osVersion.split('.')[0] === '10') {
        device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0]
    }
}

const isWechat = /MicroMessenger/i.test(ua)

const Wmxy = (function isWanxiao() {
    const device = wanxiaoUserAgent()
    // Tip: 通过完美校园特性来识别,随机抽选两个方法
    if (window.wanxiao_authen || window.wanxiao_share) {
        device[ANDROID] = true
        device[WANXIAO] = true
    }
    // Tip: iOS老版本UIWebview bridge 方式和 WKWebview 方式, 也是随机抽取方法
    if (window.bridge || (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.getToken)) {
        device[IOS] = true
        device[WANXIAO] = true
    }
    return device
})()

function wanxiaoUserAgent() {
    const obj = {}
    const reg = /Wanxiao\/((\d+)\.(\d+)\.(\d+))/i
    let array = ua.match(reg)
    if (array && array.length >= 5) {
        obj.version = array[1]
        obj.a = array[2]
        obj.b = array[3]
        obj.c = array[4]
    }
    return obj
}

/**
* 当前版本与传入版本对比
* 比传入版本高 return 1
* 跟传入版本一样 return 0
* 比传入版本低 return -1
* @param {String} v
 */
function compareWithWxVersion(v) {
    const info = wanxiaoUserAgent()
    if (!info.version) return -1

    const arry = v.split('.')
    if (arry.length < 3) return -1

    const major = (info.a - 0) - (arry[0] - 0)
    const minor = info.b > arry[1] ? 1 : info.b < arry[1] ? -1 : 0
    const build = info.c > arry[2] ? 1 : info.c < arry[2] ? -1 : 0
    if (major > 0) {
        return 1
    } else if (major === 0) {
        if (minor > 0) {
            return 1
        } else if (minor === 0) {
            if (build > 0) {
                return 1
            } else if (build === 0) {
                return 0
            } else {
                return -1
            }
        } else {
            return -1
        }
    } else {
        return -1
    }
}

export {
    device,
    Wmxy,
    isWechat,
    compareWithWxVersion
}

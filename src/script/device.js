/*
 * @Author: zhounan
 * @Date: 2017-11-22 14:41:18
 * @Last Modified by: zhounan
 * @Last Modified time: 2017-11-22 15:28:52
 */
const device = {
  ANDROID: 'android',
  IOS: 'ios'
}
device.ios = device.android = device.iphone = device.ipod = device.ipad = false

const ua = navigator.userAgent

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

export default device

import { isServer } from 'oreo-ui/components/utils/index'

export let supportsPassive = false
// web 滚动性能优化 参考:https://zhuanlan.zhihu.com/p/24555031
if (!isServer) {
    try {
        const opts = {}
        Object.defineProperty(opts, 'passive', {
            get() {
                supportsPassive = true
            }
        })
        window.addEventListener('test', null, opts)
    } catch (e) {
    }
}

export function on(target, event, handler, passive = true) {
    !isServer &&
        target.addEventListener(
            event,
            handler,
            supportsPassive ? { capture: false, passive } : false
        )
}

export function off(target, event, handler) {
    !isServer &&
        target.removeEventListener(event, handler, false)
}

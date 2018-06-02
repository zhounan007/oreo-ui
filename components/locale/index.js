import defaultLang from './lang/zh-CN'
import Vue from 'vue'

import format from './format'

let lang = defaultLang

let i18nHandler = function () {

}

export const t = function (path, options) {
    const array = path.split('.')
    let current = lang

    for (let i = 0, j = array.length; i < j; i++) {
        const prop = array[i]

        let value = current[prop]
        if (i === j - 1) {
            return format(value, options)
        }
        if (!value) return ''
        current = value
    }
    return ''
}
export const use = function (l) {
    lang = l || lang
}

export const i18n = function (fn) {
    console.log(fn)
}

export default { use, t, i18n }

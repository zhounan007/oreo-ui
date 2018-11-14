import Vue from 'vue';

const isServer = Vue.prototype.$isServer;
// const SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g
const SPECIAL_CHARS_REGEXP = /([:\-_]+(.))/g
const MOZ_HACK_REGEXP = /^moz([A-Z])/

export function trim(str) {
    return (str || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}

export function camelCase(name) {
    return name.replace(SPECIAL_CHARS_REGEXP, function (_, separator, letter, offset) {
        return offset ? letter.toUpperCase() : letter
    }).replace(MOZ_HACK_REGEXP, 'Moz$1')
}

/**
 * 
 * @param {Element} el 
 * @param {String} cls 
 */
export function hasClass(el, cls) {
    if (!el || !cls) return false
    if (cls.indexOf(' ') !== -1) throw new Error('className should not contain space.')
    if (el.classList) {
        return el.classList.contains(cls)
    } else {
        return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
    }
}

export function addClass(el, cls) {
    if (!el) return;
    var curClass = el.className
    var classes = (cls || '').split(' ')

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.add(clsName)
        } else if (!hasClass(el, clsName)) {
            curClass += ' ' + clsName
        }
    }
    if (!el.classList) {
        el.className = curClass
    }
}

export function removeClass(el, cls) {
    if (!el || !cls) return
    var classes = cls.split(' ')
    var curClass = ' ' + el.className + ' '

    for (var i = 0, j = classes.length; i < j; i++) {
        var clsName = classes[i]
        if (!clsName) continue

        if (el.classList) {
            el.classList.remove(clsName)
        } else if (hasClass(el, clsName)) {
            curClass = curClass.replace(' ' + clsName + ' ', ' ')
        }
    }
    if (!el.classList) {
        el.className = trim(curClass)
    }
}

export function getStyle(element, styleName) {
    if (isServer) return
    if (!element || !styleName) return null;
    styleName = camelCase(styleName)
    if (styleName === 'float') {
        styleName = 'cssFloat'
    }
    try {
        var computed = document.defaultView.getComputedStyle(element, '')
        return element.style[styleName] || computed ? computed[styleName] : null
    } catch (e) {
        return element.style[styleName]
    }
}

export function setStyle(element, styleName, value) {
    if (!element || !styleName) return

    if (typeof styleName === 'object') {
        for (var prop in styleName) {
            if (styleName.hasOwnProperty(prop)) {
                setStyle(element, prop, styleName[prop])
            }
        }
    } else {
        styleName = camelCase(styleName)
        // if (styleName === 'opacity' && ieVersion < 9) {
        //     element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')'
        // } else {
        element.style[styleName] = value
        // }
    }
}

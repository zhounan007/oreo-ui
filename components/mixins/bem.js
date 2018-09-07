/*
 * @Author: zhounan 
 * @Date: 2018-08-01 19:53:53 
 * @Last Modified by: zhounan
 * @Last Modified time: 2018-08-23 16:15:55
 * 
 */

const ELEMENT = '__'
const MODS = '_'

// const join = (name, el, ) =>
const join = (name, el, symbol) => el ? name + symbol + el : name

const prefix = (name, modes) => {
    if (typeof modes === 'string') {
        return join(name, modes, MODS)
    }
    if (Array.isArray(modes)) {
        return modes.map(item => {
            if (item !== '' &&
                typeof item !== 'undefined' &&
                item !== null
            ) {
                return prefix(name, item)
            }
        })
    }
    const ret = {}
    Object.keys(modes).forEach(key => {
        ret[name + MODS + key] = modes[key]
    })
    return ret
}

export default {
    methods: {
        b(el, mods) {
            // const { _name } = this.$options
            const { name } = this.$options
            if (el && typeof el !== 'string') {
                mods = el
                el = ''
            }
            el = join(name, el, ELEMENT)

            return mods ? [el, prefix(el, mods)] : el
        }
    }
}

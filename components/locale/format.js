const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;

const hasOwnProperty = Object.prototype.hasOwnProperty

/**
 * @param {String} string
 * @param {Array} args
 */
export default function format(string, ...args) {
    if (args.length === 1 && typeof args[0] === 'object') {
        args = args[0]
    }

    if (!args || !args.hasOwnProperty) {
        args = {}
    }

    return string.replace(RE_NARGS, (match, prefix, i, index) => {
        let result

        if (string[index - 1] === '{' && string[index + match.length] === '}') {
            return i
        } else {
            result = hasOwnProperty.call(args, i) ? args[i] : null
            if (result === null || result === undefined) {
                return ''
            }
            return result
        }
    })
}

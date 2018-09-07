export default {
    id: 1,
    zIndex: 1000,
    stack: [],
    lockCount: 0,
    locked: false,

    increment(key) {
        this[key]++
        return this[key]
    },

    get top() {
        return this.stack[this.stack.length - 1]
    }
}

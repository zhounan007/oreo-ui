function supportPromise() {
    if (typeof Promise === 'undefined') {
        return false
    } else {
        return true
    }
}

function normalizeKey(key) {
    if (typeof key !== 'string') {
        console.warn(`${key} used as a key,but it is not a string.`)
        key = String(key)
    }
    return key
}

function checkIfLocalStorageThrows() {
    const localStorageTestKey = '_localstorage_support_test_'
    try {
        localStorage.setItem(localStorageTestKey, true)
        localStorage.removeItem(localStorageTestKey)

        return false
    } catch (e) {
        return true
    }
}

function _getKeyPrefix(options) {
    let prefix = options.name + '/'

    return prefix
}

const DefaultConfig = {
    name: 'oreo-persistent'
}

class Store {

    constructor(options) {
        this._config = Object.assign({}, DefaultConfig, options)
        this._prefix = _getKeyPrefix(this._config)

        
        if(checkIfLocalStorageThrows()){
            
        }

    }

    setItem(key, value, callback) {

    }
    getItem() {

    }
    clear(callback) {

    }
    removeItem() {

    }
    createInstance() {

    }
}

export default new Store()
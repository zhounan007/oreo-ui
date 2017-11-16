import Vue from 'vue'

/**
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
export function slice(array, start, end) {
  let length = array == null ? 0 : array.length
  if (!length) {
    return []
  }
  start = start == null ? 0 : start
  end = end === undefined ? length : end

  if (start < 0) {
    start = -start > length ? 0 : (length + start)
  }
  end = end > length ? length : end
  if (end < 0) {
    end += length
  }
  length = start > end ? 0 : ((end - start) >>> 0)
  start >>>= 0

  let index = -1
  const result = new Array(length)
  while (++index < length) {
    result[index] = array[index + start]
  }
  return result
}

/**
 * @param {Array} array The array to process.
 * @param {number} [size=1] The length of each chunk
 * @returns {Array} Returns the new array of chunks.
 * @example
 * chunk(['a', 'b', 'c', 'd'], 2)
 * // => [['a', 'b'], ['c', 'd']]
 *
 * chunk(['a', 'b', 'c', 'd'], 3)
 * // => [['a', 'b', 'c'], ['d']]
 */
export function chunk(array, size) {
  size = Math.max(size, 0)
  const length = array == null ? 0 : array.length
  if (!length || size < 1) {
    return []
  }
  let index = 0
  let resIndex = 0
  const result = new Array(Math.ceil(length / size))

  while (index < length) {
    result[resIndex++] = slice(array, index, (index += size))
  }
  return result
}
/**
 * 事件处理
 */
export const Event = new Vue()

function s4() {
  return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
}

/**
 * 返回22位随机数
 */
export function uid() {
  return s4() + s4() + '-' + s4() + '-' + s4() + s4()
}

/**
 * 获取url参数
 */
function getSearch() {
  let query = window.location.search.substring(1)
  let attr = {}
  let match = {}
  let pl = /\+/g
  let search = /([^&=]+)=?([^&]*)/g

  let decode = function (s) {
    return decodeURIComponent(s.replace(pl, ' '))
  }
  while ((match = search.exec(query)) != null) {
    attr[decode(match[1])] = decode(match[2])
  }
  return attr
}

export function search(key) {
  const attr = getSearch()

  if (!key) {
    return window.location.search.substring(1)
  }

  return attr[key]
}

export default (function () {
  const fn = function (e) {
    e.preventDefault()
    e.stopPropagation()
  }
  let islock = false

  return {
    lock() {
      if (islock) return
      islock = true
      document.addEventListener('touchmove', fn)
    },
    unlock() {
      islock = false
      document.removeEventListener('touchmove', fn)
    }
  }
})()

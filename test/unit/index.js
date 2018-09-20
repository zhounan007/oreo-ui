require('@c/theme-oreo/lib/index.css')

const testsContext = require.context('./specs', true, /\.spec$/)
testsContext.keys.forEach(testsContext)
const version = process.argv[2] || process.env.VERSION
const cc = require('conventional-changelog')
const file = `./CHANGELOG.md`
const fileStream = require('fs').createWriteStream(file)

cc({
    preset: 'angular',
    pkg: {
        transform(pkg) {
            pkg.version = `v${version}`
            return pkg
        }
    },
    append: true,
    debug() {
        console.debug.bind(console)
    },
    // 
    releaseCount: 0
}).pipe(fileStream).on('close', function () {
    console.log(`Generated release note at ${file}${version}`)
})
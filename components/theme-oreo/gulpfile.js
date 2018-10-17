var path = require('path');
var fs = require('fs');
var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var cleancss = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var sequence = require('gulp-sequence');
var autoprefixer = require('autoprefixer');

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var iconConfig = require('./src/script/icon-config')
var iconLocalTemplate = require('./src/script/icon-template')
var glob = require('glob')
const resolve = relativePath => path.resolve(__dirname, relativePath)
var fsExtra = require('fs-extra')
var md5File = require('md5-file')

var pkg = require('./package.json');
var config = {
    dist: __dirname + '/lib',
    AUTOPREFIXER_BROWSERS: ["Android >= 4", "Explorer >= 10", "iOS >= 7"],
    banner: [
        '/*!',
        ' * Oreo UI v<%= pkg.version %> (<%= pkg.homepage %>)',
        // ' * Copyright <%= new Date().getFullYear() %> Newcapec Mobile Internet, Inc.',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''
    ].join('\n')
};

gulp.task('svg2font', function () {
    return gulp.src(['src/assets/*.svg'])
        .pipe(iconfontCss({
            fontName: iconConfig.name,
            path: 'src/script/icon-cdn-template.less',
            targetPath: '../icon/icons.less'
        }))
        .pipe(iconfont({
            fontName: iconConfig.name,
            formats: ['ttf']
        }))
        .on('glyphs', function (glyphs, options) {
            console.log(glyphs, options);
        })
        .pipe(gulp.dest('src/icon'));
})


gulp.task('compile', function () {
    return gulp.src('./src/*.less')
        .pipe(less({ javascriptEnabled: true }).on('error', function (e) {
            console.error(e.message);
            this.emit('end')
        }))
        .pipe(postcss([autoprefixer(config.AUTOPREFIXER_BROWSERS)]))
        .pipe(header(config.banner, {
            pkg: pkg
        }))
        .pipe(cleancss())
        .pipe(gulp.dest(config.dist));
})

gulp.task('copyfont', ['svg2font'], function () {

    // remove previous ttf
    let preTTfs = glob.sync(resolve('./src/*.ttf'))
    preTTfs.forEach(ttf => fsExtra.removeSync(ttf))

    let libTTfs = glob.sync(resolve('./lib/*.ttf'))
    libTTfs.forEach(ttf => fsExtra.removeSync(ttf))

    // generate ttf hash  &  dist to  src/style/components/oreo-icons-xxxxxx.ttf
    const ttfPath = resolve(`src/icon/${iconConfig.name}.ttf`)
    const hash = md5File.sync(ttfPath).slice(0, 6)
    fsExtra.renameSync(ttfPath, resolve(`./src/${iconConfig.name}-${hash}.ttf`))
    // fsExtra.renameSync(ttfPath, resolve(`./lib/${iconConfig.name}-${hash}.ttf`))

    // copy src/icon/icons.less  to src/style/components/oreo-icons.less
    let source = fsExtra.readFileSync(resolve('src/icon/icons.less'), 'utf-8')
    source = source.replace(`${iconConfig.name}.ttf`, `${iconConfig.name}-${hash}.ttf`)
    fsExtra.writeFileSync(resolve(`src/${iconConfig.name}.less`), source)

    // generate oreo-icons-local.less 
    const localIconSource = iconLocalTemplate(iconConfig.name, hash)
    fsExtra.writeFileSync(resolve(`src/${iconConfig.name}-local.less`), localIconSource);

    return gulp.src('./src/*.ttf').pipe(gulp.dest(config.dist));
})

gulp.task('build', sequence('copyfont', 'compile'))

var path = require('path');
var fs = require('fs');
var yargs = require('yargs').argv;
var gulp = require('gulp');
var less = require('gulp-less');
var header = require('gulp-header');
var cleancss = require('gulp-clean-css');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');
var bs = require('browser-sync').create('OREO_UI Server');
var tap = require("gulp-tap");
var postcss = require("gulp-postcss");
var px2rem = require("postcss-px2rem");

var manifest = require('./manifest.json');


var option = {
    base: 'src'
};
var pkg = require('./package.json');
var config = {
    src: {
        main: 'src/style/oreo_ui.less',
        example_style: 'src/example/res/css/example.less',
        example_assets: 'src/example/**/*.?(png|jpg|gif|js)',
        example_html: 'src/example/index.html',
        example_components: 'src/example/components'
    },
    dist: __dirname + '/lib',
    docs: __dirname + '/docs',
    AUTOPREFIXER_BROWSERS: ["Android >= 4", "Explorer >= 10", "iOS >= 7"],
    remUnit: 50,
    banner: [
        '/*!',
        ' * Oreo UI v<%= pkg.version %> (<%= pkg.homepage %>)',
        ' * Copyright <%= new Date().getFullYear() %> Newcapec Mobile Internet, Inc.',
        ' * Licensed under the <%= pkg.license %> license',
        ' */',
        ''
    ].join('\n')
};


function getFolders(dir) {
    return fs.readdirSync(dir)
        .filter(function (file) {
            return fs.statSync(path.join(dir, file)).isFile();
        });
}




gulp.task('build:style', function () {

    gulp.src(config.src.main, {
            base: 'src/style'
        })
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end')
        }))
        .pipe(postcss(
            [
                autoprefixer(config.AUTOPREFIXER_BROWSERS)
            ]
        ))
        .pipe(header(config.banner, {
            pkg: pkg
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dist))
        .pipe(bs.reload({
            stream: true
        }))
        .pipe(cleancss())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(config.dist));
})

gulp.task('build:rem', function () {

    gulp.src(config.src.main, {
            base: 'src/style'
        })
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end')
        }))
        .pipe(postcss(
            [
                autoprefixer(config.AUTOPREFIXER_BROWSERS),
                px2rem({
                    remUnit: config.remUnit
                })
            ]
        ))
        .pipe(header(config.banner, {
            pkg: pkg
        }))
        .pipe(sourcemaps.write())
        .pipe(rename(function (path) {
            path.basename += '.rem';
        }))
        .pipe(gulp.dest(config.dist))
        .pipe(bs.reload({
            stream: true
        }))
        .pipe(cleancss())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(config.dist));
})

gulp.task('build:example:assets', function () {
    gulp.src(config.src.example_assets, option)
        .pipe(gulp.dest(config.docs))
        .pipe(bs.reload({
            stream: true
        }));
})

gulp.task('build:example:style', function () {
    gulp.src(config.src.example_style, option)
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end');
        }))
        .pipe(postcss([autoprefixer(config.AUTOPREFIXER_BROWSERS)]))
        .pipe(cleancss())
        .pipe(gulp.dest(config.docs))
        .pipe(bs.reload({
            stream: true
        }));
})

// gulp.task('build:example:components', function () {
//     gulp.src(config.src.example_html, option)
//         .pipe(tap(function (file) {

//             var dir = path.dirname(file.path);
//             var contents = file.contents.toString();

//             var src = './src/example/components'
//             var cps = getFolders(src);
//             var tpls = [];
//             cps.forEach(function (v, index) {
//                 var filename = path.join(src, v);
//                 var id = path.basename(filename, '.html');

//                 var content = fs.readFileSync(filename, 'utf-8');
//                 tpls.push('<script type="text/html" id="tpl_' + id + '">\n' + content + '\n</script>')
//             })

//             contents = contents.replace(/<script\s+type="text\/html"\s*><\/script>/gi, tpls.join(''));

//             file.contents = new Buffer(contents);
//         }))
//         .pipe(gulp.dest(config.dist))
//         .pipe(bs.reload({
//             stream: true
//         }));
// });

gulp.task('build:example:html', function () {
    gulp.src(config.src.example_html, option)
        .pipe(tap(function (file) {
            var contents = file.contents.toString();

            var cps = getFolders(config.src.example_components);
            var tpls = [];
            cps.forEach(function (v, index) {
                var filename = path.join(config.src.example_components, v);
                var id = path.basename(filename, '.html');

                var content = fs.readFileSync(filename, 'utf-8');
                tpls.push('<script type="text/html" id="tpl_' + id + '">\n' + content + '\n</script>\n')
            })
            contents = contents.replace(/<script\s+type="text\/html"\s*><\/script>/gi, tpls.join(''));
            file.contents = new Buffer(contents);
        }))
        .pipe(gulp.dest(config.docs))
        .pipe(bs.reload({
            stream: true
        }));
})

gulp.task('build:docs:style', function () {
    gulp.src(config.src.main, {
            base: 'src/style'
        })
        .pipe(sourcemaps.init())
        .pipe(less().on('error', function (e) {
            console.error(e.message);
            this.emit('end')
        }))
        .pipe(postcss([autoprefixer(config.AUTOPREFIXER_BROWSERS)]))
        .pipe(header(config.banner, {
            pkg: pkg
        }))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(__dirname + '/docs/example'))
        .pipe(bs.reload({
            stream: true
        }))
        .pipe(cleancss())
        .pipe(rename(function (path) {
            path.basename += '.min';
        }))
        .pipe(gulp.dest(__dirname + '/docs/example'));
})



gulp.task('build:components:px', function () {
    Object.keys(manifest).forEach(function (item) {
        var base = manifest[item].substring(0, manifest[item].lastIndexOf('/'))
        gulp.src(manifest[item], {
                base: base
            })
            .pipe(less().on('error', function (e) {
                console.error(e.message);
                this.emit('end')
            }))
            .pipe(postcss([autoprefixer(config.AUTOPREFIXER_BROWSERS)]))
            .pipe(bs.reload({
                stream: true
            }))
            .pipe(cleancss())
            .pipe(gulp.dest(__dirname + '/lib/px/'));
    })
})
gulp.task('build:components:rem', function () {
    Object.keys(manifest).forEach(function (item) {
        var base = manifest[item].substring(0, manifest[item].lastIndexOf('/'))
        gulp.src(manifest[item], {
                base: base
            })
            .pipe(less().on('error', function (e) {
                console.error(e.message);
                this.emit('end')
            }))
            .pipe(postcss([
                autoprefixer(config.AUTOPREFIXER_BROWSERS),
                px2rem({
                    remUnit: config.remUnit
                })
            ]))
            .pipe(bs.reload({
                stream: true
            }))
            .pipe(cleancss())
            .pipe(gulp.dest(__dirname + '/lib/rem/'));
    })
})

gulp.task('build:example', ['build:example:assets', 'build:example:style', 'build:example:html'])

gulp.task('release', ['build:style', 'build:rem', 'build:components:px', 'build:components:rem', 'build:example', 'build:docs:style'])

gulp.task('watch', ['release'], function () {
    gulp.watch('src/style/**/*', ['build:style', 'build:rem', 'build:components:px', 'build:components:rem', 'build:docs:style']);
    gulp.watch('src/example/res/css/example.less', ['build:example:style']);
    gulp.watch('src/example/**/*.?(png|jpg|gif|js)', ['build:example:assets']);
    gulp.watch('src/**/*.html', ['build:example:html']);
})

gulp.task('server', function () {
    yargs.p = yargs.p || 8086;
    bs.init({
        server: {
            baseDir: './docs'
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        startPath: '/'
    })
})

gulp.task('default', ['release'], function () {

    if (yargs.s) {
        gulp.start('server');
    }

    if (yargs.w) {
        gulp.start('watch');
    }
})
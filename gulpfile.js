const gulp = require("gulp")
const sass = require("gulp-sass")
const connect = require("gulp-connect")
const sourcemaps = require('gulp-sourcemaps')

sass.compiler = require('node-sass');

function scss() {
    return gulp.src("src/scss/**/*.scss")
        .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'expanded'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("dist/css"))
        .pipe(connect.reload())
}

function watchScss () {
    return gulp.watch("src/scss/**/*.scss", {ignoreInitial: false}, scss)
}

function watch() {
    watchScss();
    connect.server({
        livereload:true,
        root: "dist", 
        port:3000
    })
}

exports.default = watch;
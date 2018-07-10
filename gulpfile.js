var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var browserSync = require("browser-sync").create();
var useref = require("gulp-useref");
var minify = require("gulp-uglify");
var gulpIf = require("gulp-if");
var minicss = require("gulp-csso");
var rename = require("gulp-rename");

gulp.task("sass", function () {
    return gulp.src("source/scss/styles.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer()
        ]))
        .pipe(gulp.dest("source/css"))
        .pipe(minicss())
        .pipe(rename("styles.min.css"))
        .pipe(gulp.dest("source/css"))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task("watch", ["browserSync", "sass"], function () {
    gulp.watch("source/scss/**/*.scss", ["sass"]);
    gulp.watch("source/*.html", browserSync.reload);
    gulp.watch("source/js/*.js", browserSync.reload);
});

gulp.task("browserSync", function () {
    browserSync.init({
        server: {
            baseDir: "source"
        },
    })
});

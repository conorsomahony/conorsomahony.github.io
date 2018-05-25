var gulp = require('gulp');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');
var minifyInline = require('gulp-minify-inline');

gulp.task("hello", function () {
    console.log("Hello!");
});

gulp.task('styles', function () {
    gulp
        .src('src/css/custom.css')
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(csso())
        .pipe(gulp.dest('build/css'))
});

// Gulp task to minify HTML files
gulp.task('pages', function () {
    return gulp
        .src(['./src/**/*.html'])
        .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
        .pipe(minifyInline())
        .pipe(gulp.dest('./build'));
});

gulp.task('watch', function () {
    gulp.watch('src/*.html', ['pages']);
    gulp.watch('src/css/custom.css', ['styles']);
    browserSync({
        server: {
            baseDir: './build/'
        }
    });
    gulp
        .watch("build/*.html")
        .on('change', browserSync.reload);
    gulp
        .watch("build/css/*.css")
        .on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
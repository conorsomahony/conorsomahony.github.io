var gulp = require('gulp');
var browserSync = require('browser-sync');
var autoprefixer = require('gulp-autoprefixer');

gulp.task("hello", function () {
    console.log("Hello!");
});

gulp.task('styles', function () {
    gulp
        .src('src/custom.css')
        .pipe(autoprefixer({browsers: ['last 2 versions'], cascade: false}))
        .pipe(gulp.dest('css'))
});

// Static Server
gulp.task('watch', function () {
    gulp.watch('src/custom.css', ['styles']);
    browserSync({
        server: {
            baseDir: './'
        }
    });
    gulp
        .watch("*.html")
        .on('change', browserSync.reload);
    gulp
        .watch("css/*.css")
        .on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
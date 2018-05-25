var gulp = require('gulp');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');

gulp.task("hello", function () {
    console.log("Hello!");
});

// compile SASS into CSS
gulp.task("sass", function () {
    return gulp.src('app/sass/**/*.sass')
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.reload({
            stream: true
        }));
});

// Static Server + watching scss/html files
gulp.task('watch', ['sass'], function () {
    browserSync({
        server: {
            baseDir: './app'
        },
    });
    gulp.watch(['app/sass/**/*.sass'], ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
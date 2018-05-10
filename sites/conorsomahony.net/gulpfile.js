var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task("hello", function () {
    console.log("Hello!");
});

// Static Server
gulp.task('watch', function () {
    browserSync({
        server: {
            baseDir: './'
        },
    });
    gulp.watch("*.html").on('change', browserSync.reload);
    gulp.watch("css/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['watch']);
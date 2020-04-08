const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');

gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "src"
        }
    });

    gulp.watch("src/*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("src/scss/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest("src/style"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("src/scss/**/*.scss", gulp.parallel('styles'));
})

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));
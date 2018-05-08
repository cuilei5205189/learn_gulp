var gulp = require('gulp');


gulp.task('copy_index',function () {
    return gulp.src('index.html').pipe(gulp.dest('dist'))
})

gulp.task('images', function () {
    return gulp.src('images/**').pipe(gulp.dest('dist/images'))
})

gulp.task('data', function () {
    return gulp.src(['xml/*.xml', 'json/*.json']).pipe(gulp.dest('dist/data'))
})
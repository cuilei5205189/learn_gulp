var gulp = require('gulp');


gulp.task('copy_index',function () {
    return gulp.src('index.html').pipe(gulp.dest('dest'))
})
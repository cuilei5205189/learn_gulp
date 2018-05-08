var gulp = require('gulp');

gulp.task('hello1', function () {
    console.log('hello world1');
});

gulp.task('hello2', function () {
    console.log('hello world2');
});

gulp.task('default', ['hello1','hello2'])
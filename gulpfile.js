var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('styles', function() {
  gulp.src('assets/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('assets'));
});
 
gulp.task('watch', function() {
    gulp.watch(['assets/*.scss'], ['styles']);
});
 
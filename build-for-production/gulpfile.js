
var gulp = require('gulp');
var replace = require('gulp-replace');

gulp.task('default', function() {
  gulp.src(['src/my-element.html'])
    .pipe(replace('bower_components', '..'))
    .pipe(gulp.dest('dist/'));
});

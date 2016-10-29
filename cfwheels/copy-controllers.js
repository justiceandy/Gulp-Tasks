var gulp = require('gulp');
var livereload = require('gulp-livereload');
/*
  Module Copies Wheels Controller Files to Dist Directory
  Triggers Live Reload
*/
module.exports = function () {
  return gulp.src(['src/controllers/**'])
    .pipe(gulp.dest('dist/controllers'))
    .pipe(livereload());
};

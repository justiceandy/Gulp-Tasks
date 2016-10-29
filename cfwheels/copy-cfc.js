var gulp = require('gulp');
var livereload = require('gulp-livereload');
/*
  Module Copies Coldfusion Component Files in CFC Directory to Dist Directory
  Triggers Live Reload
*/
module.exports = function () {
  return gulp.src(['src/cfc/**'])
    .pipe(gulp.dest('dist/cfc'))
    .pipe(livereload());
};

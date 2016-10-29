var gulp = require('gulp');
var fs = require('fs');
/*
  Module Copies Wheels Config Files to Dist Directory
*/
module.exports = function () {
  return gulp.src([
    'src/config/maintenance/*.cfm',
    ])
    .pipe(gulp.dest('dist/config/maintenance'));
};

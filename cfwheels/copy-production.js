var gulp = require('gulp');
var fs = require('fs');
/*
  Module Copies Wheels Config Files to Dist Directory
*/
module.exports = function () {
  return gulp.src([
    'src/config/production/*.cfm',
    ])
    .pipe(gulp.dest('dist/config/production'));
};

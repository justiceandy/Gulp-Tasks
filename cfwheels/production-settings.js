var gulp = require('gulp');
var fs = require('fs');
var rename = require('gulp-rename');
/*
  Module Copies Wheels Production Environment Settings File to Dist Directory
  - Otherwise Default environment file loads development mode
*/
module.exports = function () {
  return gulp.src([
    'required/production/environment.cfm'
    ])
  .pipe(rename("environment.cfm"))
  .pipe(gulp.dest('dist/config'));
};

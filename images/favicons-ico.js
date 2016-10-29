var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
require('dot-env')
/*
  Module Copies Favicons to Build Folder
  - Favicons dont have a build version appended to the file name in order
  to simplify the web config file.
*/
module.exports = function () {
  return gulp.src(['src/images/global/favicons/*.ico'])
    .pipe(gulp.dest('dist/images/global/favicons'))
};

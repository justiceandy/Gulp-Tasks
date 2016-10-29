var gulp = require('gulp');
var fs = require('fs');
var rename = require('gulp-rename');
/*
  Module Copies .env.json file to dist folder
*/
module.exports = function () {
  return gulp.src([
    '.env.json'
    ])
  .pipe(gulp.dest('dist'))
};

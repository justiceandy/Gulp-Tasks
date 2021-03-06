var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
require('dot-env')
/*
  Module Minifies JPGs in images directory
*/
module.exports = function () {
  return gulp.src(['src/images/global/sprites/generated/*.jpg'])
     .pipe(imagemin( { ext: 'JPG' } ))
     .pipe(rename({
        suffix: '-'+process.env.revision,
      }))
    .pipe(gulp.dest('dist/images/global/sprites/generated'))
};

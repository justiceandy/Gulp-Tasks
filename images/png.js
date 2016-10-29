var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
require('dot-env')
/*
  Module Minifies PNG's in images directory
*/
module.exports = function () {
  return gulp.src(['src/images/**/*.png', 'src/images/**/**/**/*.png', 'src/images/**/**/*.png'])
     .pipe(imagemin( { ext: 'PNG' } ))
     .pipe(rename({
        suffix: '-'+process.env.revision,
      }))
    .pipe(gulp.dest('dist/images/'))
};

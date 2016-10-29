var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var rename = require('gulp-rename');
require('dot-env')
/*
  Module Minifies Gif's in images directory
*/
module.exports = function () {
  return gulp.src(['src/images/**/*.gif', 'src/images/**/**/**/*.gif', 'src/images/**/**/*.gif'])
     .pipe(imagemin( { ext: 'GIF' } ))
     .pipe(rename({
        suffix: '-'+process.env.revision,
      }))
     .pipe(gulp.dest('dist/images/'));
};

var gulp = require('gulp');
var svgmin = require('gulp-svgmin');
var rename = require('gulp-rename');
require('dot-env')
/*
  Module Minifies SVG files in /images directory
*/
module.exports = function () {
  return gulp.src(['src/images/**/*.svg', 'src/images/**/**/**/*.svg', 'src/images/**/**/*.svg'])
     .pipe(svgmin())
     .pipe(rename({
        suffix: '-'+process.env.revision,
      }))
    .pipe(gulp.dest('dist/images/'))
};

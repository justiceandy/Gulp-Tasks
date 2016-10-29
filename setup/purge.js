var gulp = require('gulp');
var clean = require('gulp-clean');

/*
  Module Removes all Files in dist directory
*/

module.exports = function () {
    return gulp.src('dist/')
     .pipe(clean());
};

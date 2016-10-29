var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var stripDebug = require('gulp-strip-debug');
require('dot-env')

/*
  Module Compresses and Minifys Global JS Files
*/
module.exports = function () {
  return gulp.src(['src/javascripts/global/*.js'])
    .pipe(jshint())
    .pipe(uglify())
    .pipe(stripDebug())
    .pipe(rename({
       suffix: '-'+process.env.revision,
     }))
    .pipe(gulp.dest('dist/javascripts/global'))
    .pipe(livereload());
};

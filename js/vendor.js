var gulp = require('gulp');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
require('dot-env')
/*
  Module Copys & Compresses Vendor Files to Distro
*/
module.exports = function () {
    return gulp.src(['src/javascripts/global/vendor/**/*.js','src/javascripts/global/vendor/*.js'])
    .pipe(jshint())
    .pipe(uglify())
    .pipe(rename({
       suffix: '-'+process.env.revision,
     }))
    .pipe(gulp.dest('dist/javascripts/global/vendor'))
    .pipe(livereload());
};

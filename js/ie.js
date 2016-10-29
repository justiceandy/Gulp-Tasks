var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
require('dot-env')
/*
  IE Required Files
  Copies vendor .htc Files to dist directory. for "polyfill" drop shadows
*/
module.exports = function() {
	return gulp.src(['src/javascripts/global/vendor/*.htc'])
	.pipe(gulp.dest('dist/javascripts/global/vendor'))
	.pipe(livereload());
};

var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
require('dot-env')
/*
	Module Handles Copying & Compressing Global Stylesheets into Dist Directory
	Triggers Live Reload
*/
module.exports = function() {
	return gulp.src(['src/stylesheets/global/*.css'])
  .pipe(cleanCSS({debug: true}, function(details) {

  }))
	.pipe(autoprefixer({
			browsers: ['last 2 versions','IE 8','IE 9','Firefox > 15'],
			cascade: false
	}))
	.pipe(rename({
		 suffix: '-'+process.env.revision,
	 }))
	.pipe(gulp.dest('dist/stylesheets/global'))
	.pipe(livereload());
};

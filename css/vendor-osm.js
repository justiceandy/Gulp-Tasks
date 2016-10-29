var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
require('dot-env')
/*
	Module Handles Copying & Compressing Vendor OSM Player Styles
	Triggers Live Reload
*/
module.exports = function() {
	return gulp.src([
   'src/stylesheets/global/vendor/jquery-ui/ui-darkness/jquery-ui.css',
   'src/stylesheets/global/vendor/osm/osmplayer_default.css',
   'src/stylesheets/global/vendor/osm/osmCustom.css'
  ])
  .pipe(cleanCSS({debug: true}, function(details) {
  }))
  .pipe(concat('osm.combined-'+process.env.revision+'.css'))
	.pipe(gulp.dest('dist/stylesheets/global'))
	.pipe(livereload());
};

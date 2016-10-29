var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var fs = require('fs');

/*
	Module Uploads Built Styles to s3
*/

// Read Env File for S3 Creds
var env = JSON.parse(fs.readFileSync('.env.json'));
var config = env.aws.auth;

// Initialize S3
var s3 = require('gulp-s3-upload')(config);

module.exports = function() {
	return gulp.src([
    'dist/stylesheets/global/*.css'
  ])
  .pipe(s3({
  			Bucket: env.aws.containers.css,
  			ACL:    'public-read',
				// Add Folder Structure for Upload
				keyTransform: function(relative_filename) {
						return 'stylesheets/global/'+relative_filename;
			 }
  }, {  maxRetries: 5 }))
};

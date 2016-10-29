var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var fs = require('fs');

/*
	Module Uploads Built Javascript to s3
*/

// Read Env File for S3 Creds
// Not using dot-env due to probles with nested objects copying over to process scope
var env = JSON.parse(fs.readFileSync('.env.json'));
var config = env.aws.auth;

// Initialize S3
var s3 = require('gulp-s3-upload')(config);

module.exports = function() {
	return gulp.src([
		'dist/javascripts/*.js',
  ])
  .pipe(s3({
  			Bucket: env.aws.containers.js,
  			ACL:    'public-read'
  }, {  maxRetries: 5 }))
};

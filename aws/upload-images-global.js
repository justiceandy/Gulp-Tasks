var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var fs = require('fs');

/*
	Module Uploads Application Images to s3
*/

// Read Env File for S3 Creds
var env = JSON.parse(fs.readFileSync('.env.json'));
var config = env.aws.auth;

// Initialize S3
var s3 = require('gulp-s3-upload')(config);

module.exports = function() {
	return gulp.src([
   'dist/images/*.*'
  ])
  .pipe(s3({
  			Bucket: env.aws.containers.images,
  			ACL:    'public-read',
        keyTransform: function(relative_filename) {
            return 'images/global/general/'+relative_filename;
       }
  }, {  maxRetries: 5 }))
};

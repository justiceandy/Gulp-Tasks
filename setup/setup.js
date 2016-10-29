/*
  Module Initialize's Application
  - Creates environment file if doesnt exist
  - generates sprites for development use
  - gets latest commit and writes to environment file for revision


  Default Environment File is in
  /reqs/example.env.json

  Default Email values set to github user
*/


var gulp = require('gulp');

module.exports = function() {
	return gulp.src("src/**/*");
};

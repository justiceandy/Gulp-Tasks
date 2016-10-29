var gulp = require('gulp');
/*
  Module Copies Wheels Events Files to Dist Directory
*/
module.exports = function () {
  return gulp.src(['src/events/**'])
    .pipe(gulp.dest('dist/events'));
};

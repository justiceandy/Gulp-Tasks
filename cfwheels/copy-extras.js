var gulp = require('gulp');
/*
  Module Copies Extra Root Files to Dist Directory
*/
module.exports = function () {
  return gulp.src(['src/Application.cfc', 'src/humans.txt', 'src/index.cfm', 'src/rewrite.cfm', 'src/root.cfm', 'src/web.config', 'src/settings.xml'])
    .pipe(gulp.dest('dist/'));
};

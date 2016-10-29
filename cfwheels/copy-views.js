var gulp = require('gulp');
var htmlclean = require('gulp-htmlclean');
var livereload = require('gulp-livereload');
/*
  Module Copies & Minifies CFML View Files to Dist Directory
  Triggers Live Reload
*/
module.exports = function () {
  return gulp.src(['src/views/**'])
  .pipe(htmlclean({
      protect: /<\!--%fooTemplate\b.*?%-->/g,
      edit: function(html) { return html.replace(/\begg(s?)\b/ig, 'omelet$1'); }
   }))
  .pipe(gulp.dest('dist/views'))
  .pipe(livereload());
};

var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
require('dot-env')
/*
  Module Sprites Navigation PNG Files
*/
module.exports = function () {
  var spriteData =
   gulp.src('src/images/navigation/*.png') // source path of the sprite images
   .pipe(spritesmith({
       imgName: 'navigation.png',
       cssName: 'navigation.css',
       imgPath: '/images/layout/default/sprites/generated/navigation.png'
   }));
   spriteData.img.pipe(gulp.dest('src/images/navigation/sprites')); // output path for the sprite
   spriteData.css.pipe(gulp.dest('src/stylesheets/sprites')); // output path for the CSS
};

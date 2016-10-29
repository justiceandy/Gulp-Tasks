var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
require('dot-env')
/*
  Module Sprites /template/default/sprites/src/navigation PNG Images
*/
module.exports = function () {
  var spriteData =
   gulp.src('src/images/sprites/src/navigation/*.png') // source path of the sprite images
   .pipe(spritesmith({
       imgName: 'navigation-'+process.env.revision+'.png',
       cssName: 'navigation-'+process.env.revision+'.css',
       imgPath: process.env.assetHostName+'/images/sprites/sprites/navigation-'+process.env.revision+'.png'
   }));
   spriteData.img.pipe(gulp.dest('dist/images/sprites/')); // output path for the sprite
   spriteData.css.pipe(gulp.dest('dist/stylesheets/sprites/')); // output path for the CSS
};

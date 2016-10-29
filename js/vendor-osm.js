var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var livereload = require('gulp-livereload');
var rename = require('gulp-rename');
require('dot-env')
/*
  Module Combines OSM Player Files into Single JS. [HTTP1!]
*/
module.exports = function () {
    return gulp.src([
      'src/javascripts/global/vendor/osm/minplayer.compatibility.js',
      'src/javascripts/global/vendor/osm/minplayer.flags.js',
      'src/javascripts/global/vendor/osm/minplayer.async.js',
      'src/javascripts/global/vendor/osm/minplayer.plugin.js',
      'src/javascripts/global/vendor/osm/minplayer.display.js',
      'src/javascripts/global/vendor/osm/minplayer.js',
      'src/javascripts/global/vendor/osm/minplayer.image.js',
      'src/javascripts/global/vendor/osm/minplayer.file.js',
      'src/javascripts/global/vendor/osm/minplayer.playLoader.js',
      'src/javascripts/global/vendor/osm/minplayer.players.base.js',
      'src/javascripts/global/vendor/osm/minplayer.players.html5.js',
      'src/javascripts/global/vendor/osm/minplayer.players.flash.js',
      'src/javascripts/global/vendor/osm/minplayer.players.minplayer.js',
      'src/javascripts/global/vendor/osm/minplayer.players.youtube.js',
      'src/javascripts/global/vendor/osm/minplayer.players.vimeo.js',
      'src/javascripts/global/vendor/osm/minplayer.controller.js',
      'src/javascripts/global/vendor/osm/osmplayer.js',
      'src/javascripts/global/vendor/osm/osmplayer.parser.default.js',
      'src/javascripts/global/vendor/osm/osmplayer.parser.youtube.js',
      'src/javascripts/global/vendor/osm/osmplayer.parser.rss.js',
      'src/javascripts/global/vendor/osm/osmplayer.parser.asx.js',
      'src/javascripts/global/vendor/osm/osmplayer.parser.xspf.js',
      'src/javascripts/global/vendor/osm/osmplayer.playlist.js',
      'src/javascripts/global/vendor/osm/osmplayer.pager.js',
      'src/javascripts/global/vendor/osm/osmplayer.teaser.js',
      'src/javascripts/global/vendor/osm/osmplayer.default.js',
      'src/javascripts/global/vendor/iscroll/src/iscroll.js'
    ])
    .pipe(jshint())
    .pipe(uglify())
    .pipe(concat('osm.combined-'+process.env.revision+'.js'))
    .pipe(gulp.dest('dist/javascripts/global'))
    .pipe(livereload());
};

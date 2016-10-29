var git = require('git-rev');
var gulp = require('gulp');
var fs = require('fs');

/*
  Module Gets Latest Git Revision and Writes to .env.json
*/
module.exports = function() {
  git.short(function (str) {
    var env = JSON.parse(fs.readFileSync('.env.json'));
    console.log('Previous Revision:', env.revision);
    env.revision = str;
    console.log('New Revision:', str)
    fs.writeFile('.env.json', JSON.stringify(env, null, 3), function (err) {
      if (err) return console.log(err);
      return str;
    });
  });
};

'use strict';

var gulp        = require('gulp');
var g           = require('gulp-load-plugins')();

var tasks = {
    build: function () {
      g.util.log('Ghost Busted!');
    }
};

gulp.task('build', tasks.build);

gulp = require 'gulp'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
reactify = require 'reactify'

gulp.task 'default', ->
  browserify
    entries: ['./app/assets/javascripts/jsx/hello.jsx']
  .transform 'babelify'
  .transform 'reactify'
  .bundle()
  .pipe source 'bundle.js'
  .pipe gulp.dest 'public/assets'

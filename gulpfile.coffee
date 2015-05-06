gulp = require 'gulp'
browserify = require 'browserify'
source = require 'vinyl-source-stream'
reactify = require 'reactify'

gulp.task 'default', ->
  console.log 'start default'

  b = browserify
    entries: ['./app/assets/javascripts/jsx/hello.jsx']
    transform: 'reactify'
  b.bundle()
  .pipe source 'app.js'
  .pipe gulp.dest './app/assets/javascripts/'

  console.log 'end default'

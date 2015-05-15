gulp = require 'gulp'
babel = require 'gulp-babel'

gulp.task 'build', ->
  gulp.src './frontend/javascripts/**/*.{js,jsx,coffee}'
  .pipe babel()
  .pipe gulp.dest 'app/assets/javascripts/components'

gulp.task 'watch', ->
  gulp.watch('./frontend/javascripts/**/*.{js,jsx,coffee}', ['build'])

gulp.task 'default', ['build']

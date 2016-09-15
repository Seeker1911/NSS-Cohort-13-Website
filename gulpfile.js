'use strict'

const gulp = require('gulp')
const sass = require('gulp-sass')
const del = require('del')
const runSequence = require('run-sequence')

const sourcePath = './docs/scss/**/*.scss'
const compilePath = './docs/css'

gulp.task('sass:compile', () => (
  gulp.src(sourcePath)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(compilePath))
))

gulp.task('sass:watch', () => (
  gulp.watch(sourcePath,
    ['sass:compile']
  )
))

gulp.task('clean', () => (
  del(`${compilePath}/**/*`)
))

gulp.task('build', () => (
  runSequence('clean', ['sass:compile'])
))

gulp.task('watch', ['build', 'sass:watch'])

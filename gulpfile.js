var gulp = require('gulp');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');

gulp.task('sass', function() {
  return gulp.src('./app/assets/styles/style.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./app/assets/styles/'))
});

gulp.task('watch', function() {
  gulp.watch([
    './app/assets/styles/style.scss',
    './app/app.js',
    './app/index.html'
  ], ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: './app',
    port: 8000,
    fallback: './app/index.html'
  });
});


// Launch for development
gulp.task('default', [
  'sass',
  'connect',
  'watch'
]);

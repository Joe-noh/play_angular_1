var browserify = require('browserify');
var source = require('vinyl-source-stream');
var glob = require('glob');
var gulp = require('gulp');

var gulpPlugins = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

var paths = {
  root: './app/',
  src:  './app/scripts/',
  dist: './app/dist/'
};

gulp.task('browserify', function () {
  return browserify(paths.src + 'app.js', {debug: true})
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.dist))
  .pipe(gulpPlugins.connect.reload());
});

gulp.task('server', ['browserify'], function () {
  gulpPlugins.connect.server({
    root: './app',
    livereload: true,
  });
});

gulp.task('watch', function () {
  gulp.start('server');
  gulp.watch([paths.src + '**/*.js'], ['build']);
});

gulp.task('build', function () {
  gulp.start('browserify');
});

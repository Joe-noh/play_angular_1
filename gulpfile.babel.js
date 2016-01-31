import browserify from 'browserify';
import source from 'vinyl-source-stream';
import glob from 'glob';
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import babelify from 'babelify';

let gulpPlugins = gulpLoadPlugins({
  pattern: ['gulp-*', 'gulp.*'],
  replaceString: /\bgulp[\-.]/
});

let paths = {
  root: './app/',
  src:  './app/scripts/',
  dist: './app/dist/'
};

gulp.task('browserify', () => {
  browserify(`${paths.src}app.js`, {debug: true})
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.dist))
  .pipe(gulpPlugins.connect.reload());
});

gulp.task('server', ['browserify'], () => {
  gulpPlugins.connect.server({
    root: './app',
    livereload: true,
  });
});

gulp.task('watch', () => {
  gulp.start('server');
  gulp.watch([`${paths.src}**/*.js`], ['browserify']);
});

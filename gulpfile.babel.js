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
  root:    './app/',
  scripts: './app/scripts/',
  styles:  './app/styles/',
  dist:    './app/dist/'
};

gulp.task('browserify', () => {
  browserify(`${paths.scripts}app.js`, {debug: true})
  .transform(babelify)
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest(paths.dist))
  .pipe(gulpPlugins.connect.reload());
});

gulp.task('sass', () => {
  gulp.src(`${paths.styles}**/*.scss`)
   .pipe(gulpPlugins.sass().on('error', gulpPlugins.sass.logError))
   .pipe(gulp.dest(paths.dist));
});

gulp.task('server', ['browserify', 'sass'], () => {
  gulpPlugins.connect.server({
    root: './app',
    livereload: true,
  });
});

gulp.task('watch', () => {
  gulp.start('server');
  gulp.watch([`${paths.styles}**/*.scss`], ['sass']);
  gulp.watch([`${paths.scripts}**/*.js`], ['browserify']);
});

var jade = require('gulp-jade');
var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var path = require('path');
var deploy = require('gulp-gh-pages');

// Jade to html
gulp.task('jade', function() {
  return gulp.src('./src/jade/index.jade')
    .pipe(jade({
      locals: require('./ch_locals.js')
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

// less to css
gulp.task('less', function() {
  return gulp.src('./src/less/index.less')
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'less', 'includes'),
              path.join(__dirname, 'src', 'less', 'components')]
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

gulp.task('static', function() {
  return gulp.src('./static/**/*', {
      base: 'static'
    })
    .pipe(gulp.dest('./dist/static/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./src/**/*.jade', './resume.json', './ch_locals.js'], ['jade']);
  gulp.watch('./src/**/*.less', ['less']);
  gulp.watch('./resume.json', ['jade']);
});

gulp.task('deploy', function() {
  return gulp.src('./dist/**/*')
    .pipe(deploy());
});

gulp.task('default', ['jade', 'less', 'static', 'watch']);

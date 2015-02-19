var jade = require('gulp-jade');
var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var ch_locals = require('./ch_locals.js');

gulp.task('jade', function() {
  return gulp.src('./src/*.jade')
    .pipe(jade({
        locals: ch_locals
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

gulp.task('less', function() {
  return gulp.src('./src/*.less')
    .pipe(less())
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/**/*.jade', ['jade']);
  gulp.watch('./src/*.less', ['less']);
});

gulp.task('default', ['jade', 'less', 'watch']);

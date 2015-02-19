var jade = require('gulp-jade');
var gulp = require('gulp');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var ch_locals = require('./ch_locals.js');
var path = require('path');


// Jade to html
gulp.task('jade', function() {
  return gulp.src('./src/*.jade')
    .pipe(jade({
        locals: ch_locals
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

// less to css
gulp.task('less', function() {
  return gulp.src('./src/index.less')
    .pipe(less({paths: [ path.join(__dirname, 'src', 'includes')]}))
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

gulp.task('static', function() {
  return gulp.src('./static/**/', {
    base: 'static'
  })
  .pipe(gulp.dest('./dist/static/'))
  .pipe(livereload());
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./src/**/*.jade', ['jade']);
  gulp.watch('./src/**/*.less', ['less']);
  gulp.watch('./resume.json', ['jade']);
});

gulp.task('default', ['jade', 'less', 'static', 'watch']);

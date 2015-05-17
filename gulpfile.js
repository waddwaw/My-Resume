var gulp = require('gulp');
var jade = require('gulp-jade');
var less = require('gulp-less');
var markdown = require('gulp-markdown');
var layout = require('gulp-layout');
var livereload = require('gulp-livereload');
var deploy = require('gulp-gh-pages');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var http = require('http');
var st = require('st');

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
  gulp.src('./src/less/questions.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'less', 'includes'),
              path.join(__dirname, 'src', 'less', 'components')]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/questions/'))
    .pipe(livereload());

  gulp.src('./src/less/index.less')
    .pipe(sourcemaps.init())
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'less', 'includes'),
              path.join(__dirname, 'src', 'less', 'components')]
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
    .pipe(livereload());
});

// Static assets
gulp.task('static', function() {
  return gulp.src('./static/**/*', {
      base: 'static'
    })
    .pipe(gulp.dest('./dist/static/'))
    .pipe(livereload());
});

// Demos
gulp.task('demo', function() {
  return gulp.src('./interview/demo/**/*', {
      base: './interview/demo'
    })
    .pipe(gulp.dest('./dist/demo/'))
    .pipe(livereload());
});

// questions
gulp.task('questions', function() {
  gulp.src('./node_modules/highlight.js/styles/tomorrow.css')
    .pipe(gulp.dest('./dist/questions/'));

  gulp.src('./interview/questions/**.md')
    .pipe(markdown({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    }))
    .pipe(layout({
      layout: './src/jade/layout/questions-layout.jade'
    }))
    .pipe(gulp.dest('./dist/questions/'))
    .pipe(livereload());
});

gulp.task('watch', ['server'], function() {
  livereload.listen({ basePath: 'dist' });
  gulp.watch('./interview/demo/**/*', ['demo']);
  gulp.watch('./interview/questions/**/*', ['questions']);
  gulp.watch(['./src/**/*.jade', './resume.json', './ch_locals.js'], ['jade']);
  gulp.watch('./src/**/*.less', ['less']);
  gulp.watch('./resume.json', ['jade']);
});

gulp.task('build', ['jade', 'less', 'static', 'demo', 'questions']);

gulp.task('server', ['build'], function(done) {
  http.createServer(
    st({ path: __dirname + '/dist', index: 'index.html', cache: false })
  ).listen(8000, done);
});

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(deploy());
});

gulp.task('default', ['server', 'watch']);

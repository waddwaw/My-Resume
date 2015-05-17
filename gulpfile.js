var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();

var path = require('path');
var http = require('http');
var st = require('st');

// Jade to html
gulp.task('jade', function() {
  return gulp.src('./src/jade/index.jade')
    .pipe(plugins.jade({
      locals: require('./ch_locals.js')
    }))
    .pipe(gulp.dest('./dist/'))
    .pipe(plugins.livereload());
});

// less to css
gulp.task('less', function() {
  gulp.src('./src/less/questions.less')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      paths: [path.join(__dirname, 'src', 'less', 'includes'),
              path.join(__dirname, 'src', 'less', 'components')]
    }))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./dist/questions/'))
    .pipe(plugins.livereload());

  gulp.src('./src/less/index.less')
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.less({
      paths: [path.join(__dirname, 'src', 'less', 'includes'),
              path.join(__dirname, 'src', 'less', 'components')]
    }))
    .pipe(plugins.sourcemaps.write())
    .pipe(gulp.dest('./dist/'))
    .pipe(plugins.livereload());
});

// Static assets
gulp.task('static', function() {
  return gulp.src('./static/**/*', {
      base: 'static'
    })
    .pipe(gulp.dest('./dist/static/'))
    .pipe(plugins.livereload());
});

// Demos
gulp.task('demo', function() {
  return gulp.src('./interview/demo/**/*', {
      base: './interview/demo'
    })
    .pipe(gulp.dest('./dist/demo/'))
    .pipe(plugins.livereload());
});

// questions
gulp.task('questions', function() {
  gulp.src('./node_modules/highlight.js/styles/tomorrow.css')
    .pipe(gulp.dest('./dist/questions/'));

  gulp.src('./interview/questions/**.md')
    .pipe(plugins.markdown({
      highlight: function (code) {
        return require('highlight.js').highlightAuto(code).value;
      }
    }))
    .pipe(plugins.layout({
      layout: './src/jade/layout/questions-layout.jade'
    }))
    .pipe(gulp.dest('./dist/questions/'))
    .pipe(plugins.livereload());
});

gulp.task('watch', ['server'], function() {
  plugins.livereload.listen({ basePath: 'dist' });
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
    .pipe(plugins.ghPages());
});

gulp.task('default', ['server', 'watch']);

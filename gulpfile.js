var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var livereload = require('gulp-livereload');

gulp.task('sass', function () {
  return gulp.src('./styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(livereload());
});

gulp.task('sass:watch', function () {
    livereload.listen();
    gulp.watch('./styles/**/*.scss', ['sass']);
});

gulp.task('tratata', function () {
  return gulp.src('js/main.js')
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(gulp.dest('dist'));
});
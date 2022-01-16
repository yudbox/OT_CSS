'use strict';
 
var gulp = require('gulp');
var gp   = require('gulp-load-plugins')(),
    browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "src/"
        }
    });
    gulp.watch('src/sass/*.sass',gulp.series('sass'));
    gulp.watch('src/*.html').on('change',browserSync.reload);
    gulp.watch('src/js/*.js').on('change',browserSync.reload);
});

gulp.task('sass', function () {
    return gulp.src('src/sass/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gp.autoprefixer({
        browsers: ['last 5 versions']
    }))
      .pipe(gp.concatCss("main.css"))
      .pipe(gulp.dest('src/css'))
      .pipe(browserSync.stream());
  });


  gulp.task('default', gulp.series(
      gulp.parallel('sass','serve')
  ));
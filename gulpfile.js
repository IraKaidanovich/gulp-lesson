const gulp = require('gulp');
const clean = require ('gulp-clean');
const htmlPartial = require ('gulp-html-partial')

gulp.task ('html', () => {
  return gulp.src(['src/pages/**/*.html'])
  .pipe(htmlPartial({
    basePath: 'src/includes/'
  }))
  .pipe(gulp.dest('dist'))
});

gulp.task ('css', () => {
  return gulp.src(['src/css/**/*.css'])

  .pipe(gulp.dest('dist/css'))
});


gulp.task ('js', () => {
  return gulp.src(['src/js/**/*.js'])
  .pipe(gulp.dest('dist/js'))
});

gulp.task ('img', () => {
  return gulp.src(['src/img/**/*'])
  .pipe(gulp.dest('dist/img'))
})

gulp.task ('clean', () => {
  return gulp.src(['./dist'])
   .pipe(clean())
});

gulp.task ('watch', () => {
  gulp.watch(['src/pages/**/*.html'], gulp.series('html'));
  gulp.watch (['src/includes/**/*.html'], gulp.series('html'))
  gulp.watch (['src/css/**/*.css'], gulp.series('css'))
  gulp.watch (['src/js/**/*.js'], gulp.series('js'))
  gulp.watch (['src/img/**/*'], gulp.series('img'))
})

gulp.task ('start', gulp.series( 'clean', 'html', 'css', 'js', 'img', 'watch'))


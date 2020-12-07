var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', async function(){
  gulp.src('./src/scss/**/*.scss')
});

gulp.task('sass:watch', async function(){
  gulp.src('./src/scss/**/*scss')
    .pipe(sass())
    .pipe(gulp.dest('./src/css/'));
});

gulp.task('default', async function(){
  console.log("OK");
 });
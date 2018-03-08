let gulp = require('gulp');
let sass = require('gulp-sass');
let browserSync = require('browser-sync').create();
let concat = require('gulp-concat');
let babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build-html', function() {
	gulp.src('./src/html/**/*.html')
		.pipe(gulp.dest('./dist/html/'));
});

gulp.task('build-js', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(concat('application.js'))
		.pipe(gulp.dest('./dist/scripts/'));
});

gulp.task('build-images', function() {
  gulp.src('./src/images/**/*')
		.pipe(gulp.dest('./dist/images/'));
});


gulp.task('build-css', function() {
    gulp.src('./src/sass/application.scss')
      .pipe(sass())
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
    	.pipe(gulp.dest('./dist/styles/'));
});

gulp.task('watcher',['build-css', 'build-html', 'build-js'], function() {
    gulp.watch('./src/sass/**/*.scss', ['build-css']);
    gulp.watch('./src/scripts/**/*.js', ['build-js']);
    gulp.watch('./src/html/**/*.html', ['build-html']);
    gulp.watch('./src/dist/**/*').on('change', browserSync.reload);
});

gulp.task('serve',['build-images', 'watcher'], function() {
    browserSync.init({
    	server: {
    		baseDir: './dist',
        open: true,
      },

      startPath: './html/main.html'
    })
});
var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	browserSync = require('browser-sync'),
	$ = gulpLoadPlugins();

gulp.task('lint', () =>
	gulp.src('app/scripts/**/*.js')
	.pipe($.eslint())
	.pipe($.eslint.format())
	.pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

gulp.task('browser-sync', ['nodemon'], () => {
	browserSync.init(null, {
		proxy: "http://localhost:3000", // port node server is running on. May need updated
		files: ["app/**/*.*"],
		port: 7000
	});
});

gulp.task('nodemon', (cb) => {
	var started = false;

	return $.nodemon({
		script: 'app.js',
		ignore: ['app/']	// dont reload server for client side change
	}).on('start', () => {
		if (!started) {
			cb();
			started = true;
		}
	});
});

gulp.task('watch', () => {
	// gulp.watch(['app/**/*.html'], do-task);
	// gulp.watch(['app/styles/**/*.{scss,css}'], do-task);
	gulp.watch(['app/scripts/**/*.js'], ['lint']);
	// gulp.watch(['app/images/**/*'], do-task);
});

gulp.task('develop', ['browser-sync', 'watch'], () => {});
gulp.task('default', ['develop'], () => {});

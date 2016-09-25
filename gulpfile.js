var gulp = require('gulp'),
	gulpLoadPlugins = require('gulp-load-plugins'),
	browserSync = require('browser-sync'),
	nodemon = require('gulp-nodemon'),
	livereload = require('gulp-livereload'),
	reload = browserSync.reload;
	$ = gulpLoadPlugins();

// Lint JavaScript
gulp.task('lint', () =>
  gulp.src('app/scripts/**/*.js')
    .pipe($.eslint())
    .pipe($.eslint.format())
    //.pipe($.if(!browserSync.active, $.eslint.failOnError()))
);

// Watch files for changes & reload
gulp.task('serve', ['lint'], () => {
  browserSync({
    notify: false,
    // Customize the Browsersync console logging prefix
    logPrefix: 'WSK',
    // Allow scroll syncing across breakpoints
    scrollElementMapping: ['main', '.mdl-layout'],
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    server: ['.tmp', 'app'],
    port: 3002
  });

  gulp.watch(['app/**/*.html'], reload);
  gulp.watch(['app/styles/**/*.{scss,css}'], [reload]);
  gulp.watch(['app/scripts/**/*.js'], ['lint', reload]);
  gulp.watch(['app/images/**/*'], reload);
});

gulp.task('develop', function () {
	livereload.listen();
	nodemon({
		script: 'app.js',
		ext: 'js',
		stdout: false
	}).on('readable', function () {
		this.stdout.on('data', function (chunk) {
			if (/^Express server listening on port/.test(chunk)) {
				livereload.changed(__dirname);
			}
		});
		this.stdout.pipe(process.stdout);
		this.stderr.pipe(process.stderr);
	});
});

gulp.task('default', [
	'develop'
]);

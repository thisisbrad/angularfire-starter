var gulp = require('gulp')

gulp.task('html:build', function () {
	return gulp.src('./templates/**/*.html')
	.pipe(gulp.dest('./public/views/'))
})

gulp.task('html:watch', function () {
	gulp.watch('./templates/**/*.html', ['html:build'])
})
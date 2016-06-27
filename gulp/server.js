var gulp = require('gulp')
var nodemon = require('nodemon')

gulp.task('server', function () {
	nodemon({
		script: 'server.js',
		ext: 'js',
		ignore: ['ng*', 'gulp*', 'public']
	})
})
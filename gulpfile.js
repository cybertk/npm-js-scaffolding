var gulp = require('gulp');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var coveralls = require('gulp-coveralls');
var gulpif = require('gulp-if');

gulp.task('test', function () {
    return gulp.src('index.js')
        .pipe(istanbul())
        .pipe(istanbul.hookRequire())
        .on('finish', function () {
            gulp.src('test/*.js')
                .pipe(mocha())
                .pipe(istanbul.writeReports({reporters: ['text-summary', 'lcovonly', 'html']}))
                .on('end', function () {
                    gulp.src('coverage/lcov.info')
                        .pipe(gulpif(process.env['TRAVIS'], coveralls()))
                })
        });
});

gulp.task('default', function () {
    gulp.start('test')
});

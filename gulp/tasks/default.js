var gulp          = require('gulp');
var sequence      = require('run-sequence');

gulp.task('default', function(done) {
  sequence('data','build', 'browser-sync', 'watch', done);
});

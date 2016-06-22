var gulp          = require('gulp');
var sequence      = require('run-sequence');

gulp.task('data', function(done) {
  sequence('abouts', 'blog', 'devos', 'events', 'ministries', 'photos', 'series', 'series', 'sermons', done);
});

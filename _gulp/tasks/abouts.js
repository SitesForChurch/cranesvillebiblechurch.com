var download = require('gulp-downloader'),
     jeditor = require('gulp-json-editor'),
     jsonTransform = require('gulp-json-transform'),
     request = require('request'),
     source = require('vinyl-source-stream'),
     streamify = require('gulp-streamify');
     gulp        = require('gulp');

gulp.task('abouts', function () {
    return request({
            url: 'https://api.airtable.com/v0/appNOtPfC2oY5GcGt/Pages?&view=ordered',
            headers: {
                  'User-Agent': 'request',
                  'Authorization': 'Bearer keyRTLlrVS02vC3Vx'
            }
        })
        .pipe(source('abouts.json'))
        .pipe(streamify(jsonTransform(function (data) {
                // data is your json

                // start off with an empty array
                var arr = [];
                // loop through every record
                for (var i = 0, ii = data.records.length; i < ii; i++)
                {
                  // push the item value into the array
                  arr.push(data.records[i].fields);
                }
                return arr;
            })))
        .pipe(gulp.dest('./_data'));
 });

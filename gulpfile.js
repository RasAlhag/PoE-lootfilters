//requires
var gulp = require('gulp');
var path = require('path');
var concat = require('gulp-concat');
var rename = require("gulp-rename");
var order = require("gulp-order");
var replace = require('gulp-replace');

//paths
var distPath =          "./dist";
var fileExtension = ".filter";

var srcLightPath =      "./src/light";
var srcFullPath =       "./src/full";
var srcPath =           "./src";
var all =               "/*"+fileExtension;

//tasks
gulp.task('full', function () {
	return gulp.src([			
			srcFullPath+'/head'+fileExtension,
			srcFullPath+'/rgbItems'+fileExtension,
			srcFullPath+'/jewels'+fileExtension,
			srcFullPath+'/linkedSocket'+fileExtension,
			srcFullPath+'/currency'+fileExtension,
			srcFullPath+'/gems'+fileExtension,
			srcFullPath+'/legacyBreachstone'+fileExtension,
			srcFullPath+'/essence'+fileExtension,
			srcFullPath+'/maps'+fileExtension,
			srcFullPath+'/card'+fileExtension,
			srcFullPath+'/rarityItem'+fileExtension,
			srcFullPath+'/other'+fileExtension,
			srcFullPath+'/hiden'+fileExtension
		])
		.pipe(concat('full.filter'))
		.pipe(gulp.dest(distPath));
});

gulp.task('light', function () {
	return gulp.src([
			srcLightPath+'/head'+fileExtension,
			srcLightPath+'/rgbItems'+fileExtension,
			srcLightPath+'/jewels'+fileExtension,
			srcLightPath+'/linkedSocket'+fileExtension,
			srcLightPath+'/currency'+fileExtension,
			srcLightPath+'/gems'+fileExtension,
			srcLightPath+'/legacyBreachstone'+fileExtension,
			srcLightPath+'/essence'+fileExtension,
			srcLightPath+'/maps'+fileExtension,
			srcLightPath+'/card'+fileExtension,
			srcLightPath+'/rarityItem'+fileExtension,
			srcLightPath+'/other'+fileExtension,
			srcLightPath+'/hidden'+fileExtension
		])
		.pipe(concat('light.filter'))
		.pipe(gulp.dest(distPath));
});

gulp.task('build', ['full', 'light']);



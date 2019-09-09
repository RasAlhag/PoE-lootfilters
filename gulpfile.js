//requires
var gulp            =    require('gulp');
var path            =    require('path');
var concat          =    require('gulp-concat');
var rename          =    require("gulp-rename");
var order           =    require("gulp-order");
var replace         =    require('gulp-replace');

//paths
var distPath        =   "./dist";
var srcPath         =   "./src";
var base            =    srcPath+"/base";
var currency        =    srcPath+"/currency";
var flasks          =    srcPath+"/flasks";
var maps            =    srcPath+"/maps";
var amulets         =    srcPath+"/amulets";
var rings           =    srcPath+"/rings";
var gems            =    srcPath+"/gems";
var belts           =    srcPath+"/belts";
var armor           =    srcPath+"/armor";
var boots           =    srcPath+"/boots";
var gloves          =    srcPath+"/gloves";
var helmets         =    srcPath+"/helmets";
var weapons         =    srcPath+"/weapons";

var fileExtension   =     ".filter";
var adds            =     "/adds";
var addsImportant   =     "/addsImportant";
var items           =     "/items";
var all             =     "/*"+fileExtension;

//tasks
gulp.task('full', function () {
	return gulp.src([
		srcPath+"/head"+fileExtension,
		srcPath+addsImportant+all,
		base+addsImportant+all,
		base+items+all,
		base+items+"/var"+all,
		base+adds+all,
		gems+addsImportant+all,
		gems+items+"/gemsUnique"+fileExtension,
		gems+items+"/gemsCorrupted"+fileExtension,
		gems+items+"/gemsQuality"+fileExtension,
		gems+items+"/gemsLeveling"+fileExtension,
		gems+items+"/var"+all,
		gems+adds+all,
		currency+addsImportant+all,
		currency+items+all,
		currency+items+"/var"+all,
		currency+adds+all,
		belts+addsImportant+all,
		belts+items+all,
		belts+items+"/var"+all,
		belts+adds+all,
		amulets+addsImportant+all,
		amulets+items+all,
		amulets+items+"/var"+all,
		amulets+adds+all,
		rings+addsImportant+all,
		rings+items+all,
		rings+items+"/var"+all,
		rings+adds+all,
		boots+addsImportant+all,
		boots+items+all,
		boots+items+"/var"+all,
		boots+adds+all,
		gloves+addsImportant+all,
		gloves+items+all,
		gloves+items+"/var"+all,
		gloves+adds+all,
		helmets+addsImportant+all,
		helmets+items+all,
		helmets+items+"/var"+all,
		helmets+adds+all,
		armor+addsImportant+all,
		armor+items+all,
		armor+items+"/var"+all,
		armor+adds+all,
		weapons+addsImportant+all,
		weapons+items+all,
		weapons+items+"/var"+all,
		weapons+adds+all,
		maps+addsImportant+all,
		maps+items+all,
		maps+items+"/var"+all,
		maps+adds+all,
		srcPath+adds+all,
		srcPath+adds+"/var"+all,
		flasks+addsImportant+all,
		flasks+items+all,
		flasks+items+"/var"+all,
		flasks+adds+all,
		srcPath+"/hidden"+fileExtension
	])
	.pipe(concat('full.filter'))
	.pipe(gulp.dest(distPath));
});

gulp.task('light', function () {
	return gulp.src([
		srcPath+"/head"+fileExtension,
		srcPath+addsImportant+all,
		base+addsImportant+all,
		base+items+all,
		//base+items+"/var"+all,
		base+adds+all,
		gems+addsImportant+all,
		gems+items+"/gemsUnique"+fileExtension,
		gems+items+"/gemsCorrupted"+fileExtension,
		gems+items+"/gemsQuality"+fileExtension,
		gems+items+"/gemsLeveling"+fileExtension,
		//gems+items+"/var"+all,
		gems+adds+all,
		currency+addsImportant+all,
		currency+items+all,
		//currency+items+"/var"+all,
		currency+adds+all,
		belts+addsImportant+all,
		belts+items+all,
		//belts+items+"/var"+all,
		belts+adds+all,
		amulets+addsImportant+all,
		amulets+items+all,
		//amulets+items+"/var"+all,
		amulets+adds+all,
		rings+addsImportant+all,
		rings+items+all,
		//rings+items+"/var"+all,
		rings+adds+all,
		boots+addsImportant+all,
		boots+items+all,
		//boots+items+"/var"+all,
		boots+adds+all,
		gloves+addsImportant+all,
		gloves+items+all,
		//gloves+items+"/var"+all,
		gloves+adds+all,
		helmets+addsImportant+all,
		helmets+items+all,
		//helmets+items+"/var"+all,
		helmets+adds+all,
		armor+addsImportant+all,
		armor+items+all,
		//armor+items+"/var"+all,
		armor+adds+all,
		weapons+addsImportant+all,
		weapons+items+all,
		//weapons+items+"/var"+all,
		weapons+adds+all,
		maps+addsImportant+all,
		maps+items+all,
		//maps+items+"/var"+all,
		maps+adds+all,
		srcPath+adds+all,
		//srcPath+adds+"/var"+all,
		flasks+addsImportant+all,
		flasks+items+all,
		//flasks+items+"/var"+all,
		flasks+adds+all,
		srcPath+"/hidden"+fileExtension
	])
		.pipe(concat('light.filter'))
		.pipe(gulp.dest(distPath));
});

gulp.task('build',gulp.parallel('full', 'light'));




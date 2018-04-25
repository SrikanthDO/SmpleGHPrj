var gulp = require('gulp');
var concat = require("gulp-concat");
var uglify = require('gulp-uglify-es').default;
var cssconcat =  require("gulp-concat-css");
var cleanCSS = require('gulp-clean-css');
var connect = require('gulp-connect');
var htmlmin = require('gulp-htmlmin');

var doneServiceScripts = ["../../../done/components/js/*.js","../../../done/services/*.js"];
var vendorBaseScripts = ["../../../assets/inspinia/js/jquery/jquery-2.1.1.min.js",
 "../../../assets/inspinia/js/plugins/jquery-ui/jquery-ui.js",
 "../../../assets/inspinia/js/bootstrap/bootstrap.min.js",
"../../../assets/inspinia/js/plugins/metisMenu/jquery.metisMenu.js",
"../../../assets/inspinia/js/plugins/slimscroll/jquery.slimscroll.min.js",
"../../../assets/inspinia/js/plugins/pace/pace.min.js",
 "../../../assets/inspinia/js/angular/angular.min.js",
 "../../../assets/inspinia/js/angular/angular-resource.js",
 "../../../assets/inspinia/js/angular/angular-sanitize.js",
 "../../../assets/inspinia/js/plugins/oclazyload/dist/ocLazyLoad.js",
 "../../../assets/inspinia/js/angular-translate/angular-translate.js",
 "../../../assets/inspinia/js/ui-router/angular-ui-router.js",
 "../../../assets/inspinia/js/bootstrap/ui-bootstrap-tpls-0.12.0.js",
 "../../../assets/inspinia/js/plugins/angular-idle/angular-idle.js",
 "../../../assets/inspinia/js/plugins/angular-notify/angular-notify.min.js",
 "../../../assets/inspinia/js/plugins/sweetalert/sweetalert.min.js",
 "../../../assets/inspinia/js/plugins/sweetalert/angular-sweetalert.min.js",
 "../../../assets/inspinia/js/plugins/uiTree/angular-ui-tree.min.js",
 "../../../assets/inspinia/js/bootstrap/ui-bootstrap-tpls-0.12.0.min.js",
 "../../../assets/inspinia/js/angular/angular-bind-html-compile.js",
 "../../../assets/inspinia/js/plugins/datepicker/angular-datepicker.js",
 "../../../assets/inspinia/js/angular-file-upload.js"
    ];

var vendorBaseScripts1 = ["../../../assets/inspinia/js/jquery/jquery-2.1.1.min.js",
 "../../../assets/inspinia/js/plugins/jquery-ui/jquery-ui.js",
 "../../../assets/inspinia/js/bootstrap/bootstrap.min.js",
"../../../assets/inspinia/js/plugins/metisMenu/jquery.metisMenu.js",
"../../../assets/inspinia/js/plugins/slimscroll/jquery.slimscroll.min.js",
"../../../assets/inspinia/js/plugins/pace/pace.min.js"];

var vendorBaseScripts2 = [ "../../../assets/inspinia/js/angular/angular.min.js"];
 
 var vendorBaseScripts3 = [
 "../../../assets/inspinia/js/angular/angular-resource.js",
 "../../../assets/inspinia/js/angular/angular-sanitize.js",
 "../../../assets/inspinia/js/plugins/oclazyload/dist/ocLazyLoad.js",
 "../../../assets/inspinia/js/angular-translate/angular-translate.js",
 "../../../assets/inspinia/js/ui-router/angular-ui-router.js",
 "../../../assets/inspinia/js/bootstrap/ui-bootstrap-tpls-0.12.0.js"];

 var vendorBaseScripts4 = [
 "../../../assets/inspinia/js/plugins/angular-idle/angular-idle.js",
 "../../../assets/inspinia/js/plugins/angular-notify/angular-notify.min.js",
 "../../../assets/inspinia/js/plugins/sweetalert/sweetalert.min.js",
 "../../../assets/inspinia/js/plugins/sweetalert/angular-sweetalert.min.js",
 "../../../assets/inspinia/js/plugins/uiTree/angular-ui-tree.min.js",
 "../../../assets/inspinia/js/bootstrap/ui-bootstrap-tpls-0.12.0.min.js",
 "../../../assets/inspinia/js/angular/angular-bind-html-compile.js",
 "../../../assets/inspinia/js/plugins/datepicker/angular-datepicker.js",
 "../../../assets/js/angular-file-upload.js"]
var _scripts = ["config/inspinia.js",'config/app.js'
	,'config/config.js'
	 ,'config/directives.js'
	 ,'config/controllers.js'];
var _htmlSrc = ['**/*.html'];
var _donescripts = ["../../../done/components/js/chart.js",
					 "../../../done/components/js/components.js",
					 "../../../done/components/js/paging.js",
					 "../../../done/services/service.js"];
//var _doneServicescripts = ["../../../done/services/service.js"];

					 // SOURCES CONFIG
var source = {
	scripts: {
		app: _scripts,
	    donescripts: _donescripts,
    	vendor:vendorBaseScripts,
		vendor1: vendorBaseScripts1,
		vendor2: vendorBaseScripts2,
		vendor3: vendorBaseScripts3,
		vendor4: vendorBaseScripts4,
		watch: ['js/*.js', 'js/**/*.js']
	},
	styles: {
		app: {
			css: [
			 "../../../assets/inspinia/css/bootstrap.css",
			 "../../../assets/inspinia/font-awesome/css/font-awesome.css" ,
			"../../../assets/inspinia/css/animate.css" ,
			"../../../assets/inspinia/css/style.css" ,
			"../../../assets/inspinia/css/plugins/angular-notify/angular-notify.css" ]
		}
	}
};

// BUILD TARGET CONFIG
var build = {
	scripts: {
		donescripts: {
			main: 'd1components.js',
			dir: 'build/js/'
		},
		app: {
			main: 'app.js',
			dir: 'build/js/'
		},
		vendor: {
		    main: 'vendor.js',
			dir: 'build/js/'
		},
		vendor1: {
			main: 'vendor1.js',
			dir: 'build/js/'
		},
		vendor2: {
			main: 'vendor2.js',
			dir: 'build/js/'
		},
		vendor3: {
			main: 'vendor3.js',
			dir: 'build/js/'
		},
		vendor4: {
			main: 'vendor4.js',
			dir: 'build/js/'
		}
	},
	styles: {
		main:'app.css',
		dir:'build/css'
	}
};

 
// TASK
gulp.task('scripts:app', function () {
	gulp.src(source.scripts.app) // path to your files
    .pipe(concat(build.scripts.app.main))
    .pipe(gulp.dest(build.scripts.app.dir))
    .pipe(connect.reload());
});

gulp.task('scripts:donescripts', function () {
	gulp.src(source.scripts.donescripts) // path to your files
	.pipe(concat(build.scripts.donescripts.main))
	.pipe(uglify())
    .pipe(gulp.dest(build.scripts.donescripts.dir))
    .pipe(connect.reload());
});
//Gulp task to minify HTML files
gulp.task('donepages', function() {
  return gulp.src(['../../../done/components/**/*.html'])
    .pipe(htmlmin({
      collapseWhitespace: true,
      removeComments: true
    }))
    .pipe(gulp.dest(build.scripts.donescripts.dir));
});

gulp.task('scripts:vendor', function () {
	gulp.src(source.scripts.vendor) // path to your files
    .pipe(concat(build.scripts.vendor.main))
    .pipe(uglify())
    .pipe(gulp.dest(build.scripts.vendor.dir));
});
gulp.task('scripts:vendor1', function () {
	gulp.src(source.scripts.vendor1) // path to your files
    .pipe(concat(build.scripts.vendor1.main))
     .pipe(uglify())
    .pipe(gulp.dest(build.scripts.vendor.dir));
});

gulp.task('scripts:vendor2', function () {
	gulp.src(source.scripts.vendor2) // path to your files
    .pipe(concat(build.scripts.vendor2.main))
     .pipe(uglify())
    .pipe(gulp.dest(build.scripts.vendor.dir));
});

gulp.task('scripts:vendor3', function () {
	gulp.src(source.scripts.vendor3) // path to your files
    .pipe(concat(build.scripts.vendor3.main))
     .pipe(uglify())
    .pipe(gulp.dest(build.scripts.vendor.dir));
});

gulp.task('scripts:vendor4', function () {
	gulp.src(source.scripts.vendor4) // path to your files
    .pipe(concat(build.scripts.vendor4.main))
     .pipe(uglify())
    .pipe(gulp.dest(build.scripts.vendor.dir))
});


gulp.task('styles:vendor', function () {
	gulp.src(source.styles.app.css) // path to your files
    .pipe(cssconcat(build.styles.main))
   // .pipe(cleanCSS(build.styles.main))
    .pipe(gulp.dest(build.styles.dir))
    .pipe(connect.reload());
});

gulp.task('prod:scripts:app', function () {
	gulp.src(source.scripts.app) // path to your files
    .pipe(concat(build.scripts.app.main))
    .pipe(gulp.dest(build.scripts.app.dir))
    .pipe(connect.reload());
});

gulp.task('html', function() {
	  gulp.src(_htmlSrc)
	  .pipe(connect.reload())
	});
gulp.task('watch', function() {
	  gulp.watch(_scripts, ['scripts:app']);
	  gulp.watch(_donescripts, ['scripts:donescripts']);
	  gulp.watch(_htmlSrc, ['html']);
	});

	gulp.task('connect', function() {
	  connect.server({
		root: '.',
		port:3200,
	    livereload: true
	  })
	});
//,'scripts:vendor2','scripts:vendor22','scripts:vendor3','scripts:vendor4','scripts:vendor5','scripts:vendor6',

gulp.task('build', ['styles:vendor','scripts:vendor','donepages','scripts:donescripts','scripts:app','connect', 'watch']);
gulp.task('default', ['styles:vendor','scripts:vendor1','scripts:vendor2','scripts:vendor3','scripts:vendor4','donepages','scripts:donescripts','scripts:app','connect', 'watch']);
gulp.task('prod-build', ['styles:vendor','scripts:vendor1','scripts:vendor2','scripts:vendor3','scripts:vendor4','donepages','scripts:donescripts','scripts:app']);

# Gulp Core
gulp = require('gulp')

# Ultilitários
gutil = require('gulp-util')
rename = require("gulp-rename")
concat = require("gulp-concat")
watch = require('gulp-watch')
plumber = require('gulp-plumber')
gulpif = require('gulp-if')
merge = require('merge-stream');

# Pré-Compiladores
sass = require('gulp-sass')
jade = require('gulp-jade')
coffee = require('gulp-coffee')

# Minificadores
uglify = require('gulp-uglify')
ngAnnotate = require('gulp-ng-annotate')
minifyCss = require('gulp-minify-css')
minifyHTML = require("gulp-minify-html")

# Angular
htmlify = require('gulp-angular-htmlify')

# Paths

paths =
	src:
		coffee: ["./src/coffee/*.coffee"]
		jade: ["./src/jade/*.jade"]
		scss: ["./src/scss/*.scss"]
	vendor:
		js: ["./bower_components/anchor-js/anchor.js",
		"./bower_components/bootstrap-sass/assets/javascripts/bootstrap.js"]
		css: ["./bower_components/anchor-js/anchor.css",
		"./bower_components/bootstrap/dist/bootstrap-theme.min.css"]
		scss: ["./bower_components/bootstrap-sass/assets/stylesheets/"]
		font: ["./bower_components/bootstrap/dist/fonts/*.*"]
	app:
		css: "./app/css/"
		js: "./app/js/"
		img: "./app/img/"
		font: "./app/font/"
		root: "./app/"

# Functions

compileVendorCSS = -> gulp.src(paths.vendor.css).pipe(plumber())
compileVendorJS = -> gulp.src(paths.vendor.js).pipe(plumber())
compileVendorFonts = -> gulp.src(paths.vendor.font).pipe(plumber())
buildFonts = -> gulp.src(paths.vendor.font).pipe(gulp.dest(paths.app.font))

gulp.task "fonts", -> buildFonts()

compileJS = ->
	coffeestream = coffee({bare:true})
	coffeeSRC = gulp.src(paths.src.coffee)
		.pipe(gulpif(/[.]coffee$/, coffeestream))
		.pipe(ngAnnotate())

concatJS = ->
	vendorJS = compileVendorJS().pipe(concat("vendor.js"))
	JS = compileJS().pipe(concat("app.js"))
	merge(vendorJS,JS)

buildJS = (minify = false) ->
	js = concatJS()

	if minify
		js = js
			.pipe(uglify())
			.pipe(rename({extname: ".min.js"}))

	js.pipe(gulp.dest(paths.app.js))

compileCSS = ->
	gulp.src(paths.src.scss)
		.pipe(sass({
			includePaths: paths.vendor.scss
		}))

concatCSS = ->
	merge(compileVendorCSS(),compileCSS())
    	.pipe(concat("style.css"))

buildCSS = (minify=false) ->
	css = concatCSS()

	if minify
		css = css
			.pipe(minifyCss())
			.pipe(rename({extname: ".min.css"}))

	css.pipe(gulp.dest(paths.app.css))

compileHTML = ->
	gulp.src(paths.src.jade)
		.pipe(plumber())
		.pipe(jade({
			pretty: true
			}))

buildHTML = (minify=false) ->
	html = compileHTML()

	if minify
		html = html
			.pipe(minifyHTML())

	html.pipe(gulp.dest(paths.app.root))

watchCSS = ->
	watch paths.src.scss, ->
		buildCSS().pipe(plumber())

watchJS = ->
	watch paths.src.coffee, ->
		buildJS().pipe(plumber())

watchHTML = ->
	watch paths.src.jade, ->
		buildHTML().pipe(plumber())

# Tasks

gulp.task 'buildAllJS', ->
	buildJS()

gulp.task 'deployAllJS', ->
	buildJS(true)

gulp.task 'buildAllCSS', ->
	buildCSS()

gulp.task 'deployAllCSS', ->
	buildCSS(true)

gulp.task 'buildAllHTML', ->
	buildHTML()

gulp.task 'deployAllHTML', ->
	buildHTML(true)

gulp.task 'buildAll', ->
	buildJS()
	buildCSS()
	buildFonts()
	buildHTML()

gulp.task 'watchCSS', ->
	watchCSS()

gulp.task 'watchJS', ->
	watchJS()

gulp.task 'watchHTML', ->
	watchHTML()

gulp.task 'watch', ['watchCSS','watchHTML','watchJS']

# Default

gulp.task 'default', ['buildAll']
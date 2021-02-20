const {
	src, dest, parallel
}				= require("gulp"),
babel			= require("gulp-babel"),
uglify			= require("gulp-uglify"),
browserify		= require("gulp-browserify"),
sourcemaps		= require('gulp-sourcemaps'),
rename			= require("gulp-rename")

const bundle = () => src("src/main.js")
	.pipe(sourcemaps.init())
		.pipe(babel({ presets: [ "@babel/env" ] }))
		.pipe(uglify())
		.pipe(browserify({ debug: true }))
		.pipe(rename("bundle.js"))
	.pipe(sourcemaps.write("."))
	.pipe(dest("dist"))

module.exports = {
	bundle,
	default: bundle
}


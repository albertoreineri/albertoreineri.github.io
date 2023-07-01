const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');

// Concat & Minify JavaScript
function jsTask() {
    return gulp.src('./js/*.js')
        .pipe(concat('main.js'))
        .pipe(minify()) //if we want to minify the javascript files
        .pipe(gulp.dest('./build/js'))
}
exports.default = jsTask

const paths = {
    scripts: {
        src: './src/',
        dest: './build/'
    }
};

// Reload Server
async function reload() {
    server.reload();
}

// Copy assets after build
async function copyAssets() {
    gulp.src(['assets/**/*'])
        .pipe(gulp.dest(paths.scripts.dest));
}

// Build files html and reload server
async function buildAndReload() {
    await includeHTML();
    await copyAssets();
    reload();
}

async function includeHTML() {
    return gulp.src([
        './src/*.html',
        './src/!header.html', // ignore
        './src/!footer.html' // ignore
    ])
        .pipe(fileinclude({
            prefix: '@@',
            basepath: '@file'
        }))
        .pipe(gulp.dest(paths.scripts.dest));
}
exports.includeHTML = includeHTML;

exports.default = async function () {
    // Init serve files from the build folder
    server.init({
        server: {
            baseDir: paths.scripts.dest
        }
    });
    // Build and reload at the first time
    buildAndReload();
    // Watch task
    watch(["*.html", "assets/**/*"], series(buildAndReload));
};
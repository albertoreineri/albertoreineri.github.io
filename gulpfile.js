const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const minifyCSS = require('gulp-minify-css');

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
  gulp.src(['./src/images/*'])
    .pipe(gulp.dest('./build/images'));
}
// Concat & Minify JavaScript
async function jsTask() {
  gulp.src('./src/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify()) //if we want to minify the javascript files
    .pipe(gulp.dest('./build/js'))
}
//CSS
async function cssTask() {
  gulp.src('./src/css/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(minifyCSS()) //if we want to minify the javascript files
    .pipe(gulp.dest('./build/css'))
}

// Build files html and reload server
async function buildAndReload() {
  await includeHTML();
  await jsTask();
  await cssTask();
  await copyAssets();
  reload();
}

async function includeHTML() {
  return gulp.src([
    './src/*.html',
    '!./src/header.html', // ignore
    '!./src/footer.html' // ignore
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
  watch(["./src/*.html", "assets/**/*"], series(buildAndReload));
};



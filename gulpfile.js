const gulp = require('gulp');
const fileinclude = require('gulp-file-include');
const server = require('browser-sync').create();
const { watch, series } = require('gulp');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const minifyCSS = require('gulp-minify-css');

const paths = {
  scripts: {
    src: './src/assets/',
    dest: './build/'
  }
};

// Reload Server
async function reload() {
  server.reload();
}

// Copy images after build
async function copyImages() {
  gulp.src(['./src/assets/img/*'])
    .pipe(gulp.dest('./build/assets/img'));
}
// Copy fonts after build
async function copyFonts() {
  gulp.src(['./src/assets/fonts/**/*'])
    .pipe(gulp.dest('./build/assets/fonts'));
}
// Concat & Minify JavaScript
async function jsTask() {
  gulp.src('./src/assets/js/*.js')
    .pipe(concat('main.js'))
    .pipe(minify()) //if we want to minify the javascript files
    .pipe(gulp.dest('./build/assets/js'))
}
//CSS
async function cssTask() {
  gulp.src('./src/assets/css/*.css')
    .pipe(concat('styles.min.css'))
    .pipe(minifyCSS()) //if we want to minify the javascript files
    .pipe(gulp.dest('./build/assets/css'))
}

// Build files html and reload server
async function buildAndReload() {
  await includeHTML();
  await jsTask();
  await cssTask();
  await copyImages();
  await copyFonts();
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
  watch(["./src/*.html", "./src/**/*"], series(buildAndReload));
};



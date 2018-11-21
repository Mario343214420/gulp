/**
 * Created by Administrator on 2018/11/21.
 */
const gulp = require('gulp')
const jshint = require('gulp-jshint')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const rename = require('gulp-rename')

gulp.task('jshint', () => {
  return gulp.src('./src/js/*.js')
    .pipe(jshint({
      esversion: 6
    }))
    .pipe(jshint.reporter('default'));
});
gulp.task('babel', () =>
  gulp.src('./src/js/*.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(gulp.dest('build/js'))
);
gulp.task('browserify', function() {
  // Single entry point to browserify
  gulp.src('build/js/index.js')
    .pipe(browserify())  //将commonjs模块化语法转化为浏览器能识别的语法
    .pipe(rename('built.js'))  //将gulp流中的文件重命名
    .pipe(gulp.dest('./build/js')) //将gulp流中的文件输出到指定目录中
});
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('compress', function (cb) {
  pump([
      gulp.src('lib/*.js'),
      uglify(),
      gulp.dest('dist')
    ],
    cb
  );
});

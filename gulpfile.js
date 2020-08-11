const gulp = require("gulp");
const sass = require('gulp-sass');
const fileinclude = require("gulp-file-include");
const imagemin = require("gulp-imagemin");
const browserSync = require('browser-sync').create();
const reload = browserSync.reload;
sass.compiler = require('node-sass');

//js 搬家
gulp.task('movejs', function () {
  gulp
    .src('./dev/js/*.js') //來源
    .pipe(gulp.dest('dest/js')) //目的地
})

//php 搬家
gulp.task('movephp', function () {
  gulp
    .src(['./dev/*.php','./dev/**/*.php']) //來源
    .pipe(gulp.dest('dest/')) //目的地
})

//backstage 搬家
gulp.task('movebackstage', function () {
  return gulp
    .src(['./dev/backstage/**.*', './dev/backstage/**/**.*']) //來源
    .pipe(gulp.dest('./dest/backstage')) //目的地
})

// sass 轉譯
gulp.task("sass", function () {
  gulp
    .src(["./dev/sass/*.scss", "./dev/sass/**/*.scss"]) //來源
    .pipe(sass().on("error", sass.logError)) //sass轉譯
    .pipe(gulp.dest("./dest/css")); //目的地
});
/* 監聽sass */
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// html 樣板
gulp.task("fileinclude", /* ["miniimg"], */ function () {
  gulp
    .src(["./dev/*.html", "./dev/*.php"])
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./dest"));
});

// 壓圖
gulp.task("miniimg", function () {
  gulp.src("./dev/images/**")
    .pipe(imagemin())
    .pipe(gulp.dest("dest/images"));
});

// 同步
gulp.task("default", function () {
  gulp.watch(
    ["./dev/*.html", "./dev/**/*.html", "./dev/*.php", "./dev/**/*.php", "./dev/js/*.js", "./dev/sass/*.scss", "./dev/sass/**/*.scss"],
    // ["fileinclude","movejs","sass","sass:watch","movephp"],
    ["fileinclude", "movejs", "movephp","sass" ,"sass:watch"],

  );
});
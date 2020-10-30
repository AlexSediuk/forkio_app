const gulp = require('gulp'),
<<<<<<< HEAD
      sass = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      cleanCSS = require('gulp-clean-css'),
      cleaner = require('gulp-clean'),
      concat = require('gulp-concat'),
      minify = require('gulp-js-minify'),
      uglify = require('gulp-uglify'),
      pipeline = require('readable-stream').pipeline,
      imagemin = require('gulp-imagemin'),
      cssmin = require('gulp-cssmin'),
      browserSync = require('browser-sync').create();

=======
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    cleaner = require('gulp-clean'),
    concat = require('gulp-concat'),
    minify = require('gulp-js-minify'),
    uglify = require('gulp-uglify'),
    pipeline = require('readable-stream').pipeline,
    imagemin = require('gulp-imagemin'),
    cssmin = require('gulp-cssmin'),
    browserSync = require('browser-sync').create();
>>>>>>> 2ee530c92cfe20ecf9cb0a2404878420fd7aeb99
const path = {
    dist: {
        html: 'dist',
        css: 'dist/css',
        js: 'dist/js',
        img: 'dist/img',
        ico: 'dist/favicon',
        self: 'dist',
    },
    src: {
        html: 'src/*.html',
        scss: 'src/scss/**/*.*',
        js: 'src/js/*.js',
        img: 'src/img/**/**/*.*',
        ico: 'src/favicon/*.*',
    },
};
<<<<<<< HEAD

/**************** F U N C T I O N S ***************/

=======
/**************** F U N C T I O N S ***************/
>>>>>>> 2ee530c92cfe20ecf9cb0a2404878420fd7aeb99
const htmlBuild = () =>
    gulp.src(path.src.html).pipe(gulp.dest(path.dist.html)).pipe(browserSync.stream());
const scssBuild = () =>
    gulp
        .src(path.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['> 0.01%', 'last 100 versions']))
        .pipe(cssmin())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest(path.dist.css))
        .pipe(browserSync.stream());
const imgBuild = () =>
    gulp.src(path.src.img).pipe(imagemin()).pipe(gulp.dest(path.dist.img)).pipe(browserSync.stream());
const jsBuild = () =>
    gulp
        .src(path.src.js)
        .pipe(concat('script.min.js'))
        .pipe(minify())
        .pipe(uglify())
        .pipe(gulp.dest(path.dist.js))
        .pipe(browserSync.stream());
const cleanProd = () =>
    gulp
        .src(path.dist.self, { allowEmpty: true })
        .pipe(cleaner())
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(browserSync.stream());
// const icoBuild = () =>
//     gulp.src(path.src.ico).pipe(gulp.dest(path.dist.ico)).pipe(browserSync.stream());
<<<<<<< HEAD

/****************** W A T C H E R ***************/

=======
/****************** W A T C H E R ***************/
>>>>>>> 2ee530c92cfe20ecf9cb0a2404878420fd7aeb99
const watcher = () => {
    browserSync.init({
        server: {
            baseDir: './dist',
        },
    });
    gulp.watch(path.src.html, htmlBuild).on('change', browserSync.reload);
    gulp.watch(path.src.scss, scssBuild).on('change', browserSync.reload);
    gulp.watch(path.src.js, jsBuild).on('change', browserSync.reload);
    gulp.watch(path.src.img, imgBuild).on('change', browserSync.reload);
};
<<<<<<< HEAD

/**************** T A S K S ****************/

=======
/**************** T A S K S ****************/
>>>>>>> 2ee530c92cfe20ecf9cb0a2404878420fd7aeb99
gulp.task(
    'build',
    gulp.series(cleanProd, htmlBuild, scssBuild, imgBuild, jsBuild, watcher)
);
// gulp.task(
//     'dev',
//     gulp.series(cleanProd, htmlBuild, scssBuild, imgBuild, jsBuild, icoBuild, watcher)
// );
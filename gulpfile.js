/*
 * 
 * Определяем переменные 
 *
 */
 
var gulp = require('gulp'), // Сообственно Gulp JS
    uglify = require('gulp-uglify'), // Минификация JS
    concat = require('gulp-concat'), // Склейка файлов
    imagemin = require('gulp-imagemin'), // Минификация изображений
    rigger = require('gulp-rigger'),
    csso = require('gulp-csso'), // Минификация CSS
    sass = require('gulp-sass'); // Конверстация SASS (SCSS) в CSS
 
/*
 * 
 * Создаем задачи (таски) 
 *
 */
 
gulp.task('html', function () {
    gulp.src('./assets/index.html') //Выберем файлы по нужному пути
        .pipe(rigger()) //Прогоним через rigger
        .pipe(gulp.dest('./public/')) //Выплюнем их в папку build
});

 // Задача "sass". Запускается командой "gulp sass"
gulp.task('sass', function () { 
    gulp.src('./assets/style/style.scss') // файл, который обрабатываем
        .pipe(sass().on('error', sass.logError)) // конвертируем sass в css
        .pipe(csso()) // минифицируем css, полученный на предыдущем шаге
        .pipe(gulp.dest('./public/style/')); // результат пишем по указанному адресу
});
 
// Задача "js". Запускается командой "gulp js"
gulp.task('js', function() {
    gulp.src([
                './assets/js/jquery-3.3.1.min.js',
                './assets/js/main.js'
        ]) // файлы, которые обрабатываем
        .pipe(concat('min.js')) // склеиваем все JS
        .pipe(uglify()) // получившуюся "портянку" минифицируем 
        .pipe(gulp.dest('./public/js/')) // результат пишем по указанному адресу
});
 
// Задача "images". Запускается командой "gulp images"
gulp.task('img', function() {
    gulp.src('./assets/img/**/*.*') // берем любые файлы в папке 
        .pipe(imagemin()) // оптимизируем изображения для веба
        .pipe(gulp.dest('./public/img/')) // результат пишем по указанному адресу
 
});
 
// Задача "watch". Запускается командой "gulp watch"
// Она следит за изменениями файлов и автоматически запускает другие задачи
gulp.task('watch', function () {
    gulp.watch('./assets/index.html', ['html']); 
    // При изменение файлов *.scss в папке "styles" и подпапках запускаем задачу sass
    gulp.watch('./assets/style/**/*.scss', ['sass']); 
    // При изменение файлов *.js папке "javascripts" и подпапках запускаем задачу js
    gulp.watch('./assets/js/**/*.js', ['js']);
    // При изменение любых файлов в папке "images" и подпапках запускаем задачу images
    gulp.watch('./assets/img/**/*.*', ['img']);
});
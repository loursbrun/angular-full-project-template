/**
 * Created by fabienbrun on 12/05/16.
 */
/**
 * Created by fabienbrun on 11/05/16.
 */
var gulp      = require('gulp'),
    rename    = require('gulp-rename'),     // Renommage des fichiers
    sass      = require('gulp-sass'),       // Conversion des SCSS en CSS
    minifyCss = require('gulp-minify-css'), // Minification des CSS
    uglify    = require('gulp-uglify');     // Minification/Obfuscation des JS


gulp.task('css', function()
{
    return gulp.src('dev/*.scss')    // Prend en entrée les fichiers *.scss
        .pipe(sass())                      // Compile les fichiers
        //  .pipe(minifyCss())                 // Minifie le CSS qui a été généré
        .pipe(gulp.dest('dev/'));  // Sauvegarde le tout dans /src/style
});




gulp.task('watch', function()
{
    gulp.watch('dev/templates/home/*.scss', ['css']);
    gulp.watch('dev/style.css', ['copy-folder']);
});


gulp.task('copy-folder', function() {
    gulp.src('dev/style.css')
        .pipe(gulp.dest('deploy/styles/'));
});




gulp.task('default', ['watch']);



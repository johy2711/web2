var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require ('gulp-uglify'),
    minifyCSS = require('gulp-minify-css');

gulp.task('js', function(){
    gulp.src('js/source/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('js/build/'))
});
gulp.task('css', function(){
    gulp.src('css/source/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('css/min'))
});

gulp.task('html', function(){
    var opts = {comments:true, spare:true};
    gulp.src('index1.html')
        .pipe(minifyHTML(opts))
        .pipe(gulp.dest('dist/'))
});


gulp.task('watch', function(){
    gulp.watch('js/source/*.js', ['js']);
    gulp.watch('css/source/*.css', ['css']);
    
});

gulp.task('default', ['watch']);
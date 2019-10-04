// Подключаем Gulp
const gulp = require("gulp"),

    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant'),

    debug = require('gulp-debug');




gulp.task('imgminify', function(){

  var imgSource = [
    __dirname + '/src/**/*.+(jpg|jpeg|png|PNG|JPG)',
    '!' + __dirname + '/src/test-2/**/*' // exclude dir
    
  ]

    return gulp.src(imgSource, { base: __dirname + '/src/' })
        .pipe(debug({title: 'building img:', showFiles: true}))
        .pipe(imagemin([
          imageminJpegRecompress({
            progressive: true,
            max: 80,
            min: 70
          }),
          imageminPngquant({quality: [0.7,0.8]}),
          imagemin.svgo({plugins: [{removeViewBox: true}]})
        ]))
        .pipe(gulp.dest(__dirname + '/dist/'));

})
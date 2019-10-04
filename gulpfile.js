// https://zaurmag.ru/programmy-i-servisy/gulp.html только синтаксис gulp 3

// Подключаем Gulp
const gulp = require("gulp"),

    imagemin = require('gulp-imagemin'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    imageminPngquant = require('imagemin-pngquant'),

    debug = require('gulp-debug');




gulp.task('imgminify', function(){

    var imgSource = [
        __dirname + '/src/images/upload/iblock/8ee/8eed1f6640ce470bf08a521be70b56e0.png',
        __dirname + '/src/images/upload/iblock/3b5/3b5ad5415dbefada779cd05719710c14.png',
        __dirname + '/src/images/upload/iblock/18a/18a2524d090b360246c492e1de0d0775.png',
        __dirname + '/src/images/upload/iblock/f5d/f5dfc60863f05fd071771e045b4b6df1.png',
        __dirname + '/src/images/upload/iblock/07e/07e1a4f6f1fa276a73d3495285d1b33e.png',
        __dirname + '/src/images/upload/iblock/9a4/9a4a0cd1567c9eb02ced12d260184264.png',
        __dirname + '/src/images/local/templates/demis_edges/img/mann-book.png',
        __dirname + '/src/images/upload/iblock/421/421b24142af9463493f2111c0461f44f.jpg',
        __dirname + '/src/images/upload/iblock/f29/f29d5f2521f16d38320efb9e94e745d0.png',
        __dirname + '/src/images/upload/iblock/0a1/0a1640891946aeb0a3b397fb15611fc6.png',
        __dirname + '/src/images/upload/iblock/3c2/3c24816e9dde25d9b5bdf0fa2e145018.png',
        __dirname + '/src/images/upload/iblock/100/100e29de1dba7a780e5bc6cea56cf8f7.png',
        __dirname + '/src/images/upload/iblock/7ae/7ae15d333f2aab9e0b0c4d15aae4483d.png',
        __dirname + '/src/images/upload/iblock/e9f/e9f81d079d0ed8a75f97d85297336265.png',
        __dirname + '/src/images/upload/iblock/0c4/0c4ebc7b61837fe3030ab8b92febf3fb.png',
        __dirname + '/src/images/upload/iblock/67e/67ed51536c052fb1d40d105d86705057.png',
        __dirname + '/src/images/local/templates/demis_edges/img/home/video-demis-th.png',
        __dirname + '/src/images/upload/iblock/ae9/ae929c43e7906e93e2f024d5c14fe3db.png',
        __dirname + '/src/images/upload/iblock/f90/f9080d7502016e1582ad230d599e5120.png',
        __dirname + '/src/images/upload/iblock/4aa/4aab6abdbdb0d0df30d27ffbc6b5383b.jpg',
        __dirname + '/src/images/upload/iblock/5ff/5ff1165bd28fb3ca0bb067f3d8075535.jpg',
        __dirname + '/src/images/local/templates/demis_edges/img/home/bg-home.jpg',
        __dirname + '/src/images/upload/resize_cache/iblock/a3b/1142_235_1/a3b53098baac97fa09456a1a80d81060.jpg',
        __dirname + '/src/images/upload/resize_cache/iblock/709/1142_235_1/70951ac2d76001b88f48bccb3cb2d9e3.jpg',
        __dirname + '/src/images/upload/resize_cache/iblock/dfb/1142_235_1/dfb2dbd71819bff0e756eebd577a9cef.png',
        __dirname + '/src/images/upload/iblock/c3d/c3d0a892246c653a31c2889dc32db440.png',
        __dirname + '/src/images/upload/resize_cache/iblock/dbc/1142_235_1/dbcbdc57a67f93239b30cad083f02288.jpeg',
        __dirname + '/src/images/upload/resize_cache/iblock/0f5/1142_235_1/0f59cab3e4e4cd0d96f435f9f4ad12df.png',
        __dirname + '/src/images/upload/resize_cache/iblock/d5e/1142_235_1/d5ef33a07202c9fae6df7719f806f3c5.png',
        __dirname + '/src/images/upload/resize_cache/iblock/ab9/1142_235_1/ab9ebbd72db69df6f134a256168945b8.png',
        __dirname + '/src/images/upload/resize_cache/iblock/9d2/1142_235_1/9d266b1622d6fdbbe08c19c0b7ea7a2a.png',
        __dirname + '/src/images/upload/iblock/39d/39db0df68706eed4148990b00cf383c1.jpg',
        __dirname + '/src/images/local/templates/demis_edges/img/levitas.png',
        __dirname + '/src/images/upload/iblock/18a/18a2524d090b360246c492e1de0d0775.png',
        __dirname + '/src/images/upload/iblock/f5d/f5dfc60863f05fd071771e045b4b6df1.png',
        __dirname + '/src/images/upload/iblock/c64/c6445ff16489298f92240c5a5c1ed634.jpg',
        __dirname + '/src/images/upload/iblock/8ee/8eed1f6640ce470bf08a521be70b56e0.png',
        __dirname + '/src/images/upload/iblock/9a4/9a4a0cd1567c9eb02ced12d260184264.png',
        __dirname + '/src/images/upload/iblock/07e/07e1a4f6f1fa276a73d3495285d1b33e.png',
        __dirname + '/src/images/upload/iblock/3b5/3b5ad5415dbefada779cd05719710c14.png',
        __dirname + '/src/images/local/templates/demis_edges/img/levitas-book.png',
        __dirname + '/src/images/upload/iblock/f29/f29d5f2521f16d38320efb9e94e745d0.png',
        __dirname + '/src/images/upload/iblock/0a1/0a1640891946aeb0a3b397fb15611fc6.png',
        __dirname + '/src/images/upload/iblock/7ae/7ae15d333f2aab9e0b0c4d15aae4483d.png',
        __dirname + '/src/images/upload/iblock/3c2/3c24816e9dde25d9b5bdf0fa2e145018.png',
        __dirname + '/src/images/upload/iblock/100/100e29de1dba7a780e5bc6cea56cf8f7.png',
        __dirname + '/src/images/local/templates/demis_edges/img/home/video-demis-th.png',
        __dirname + '/src/images/upload/iblock/0c4/0c4ebc7b61837fe3030ab8b92febf3fb.png',
        __dirname + '/src/images/upload/iblock/e9f/e9f81d079d0ed8a75f97d85297336265.png',
        __dirname + '/src/images/upload/iblock/67e/67ed51536c052fb1d40d105d86705057.png',
        __dirname + '/src/images/local/templates/demis_edges/img/home/bg-home.jpg',
        __dirname + '/src/images/upload/iblock/ae9/ae929c43e7906e93e2f024d5c14fe3db.png',
        __dirname + '/src/images/upload/iblock/f90/f9080d7502016e1582ad230d599e5120.png',
        __dirname + '/src/images/upload/iblock/c3d/c3d0a892246c653a31c2889dc32db440.png',
        __dirname + '/src/images/local/templates/demis_edges/img/bcgpage/bg_increase-sales.jpg',

    ]

    return gulp.src(imgSource, {base: __dirname + '/src/'})
        .pipe(debug({title: 'building img:', showFiles: true}))
        .pipe(gulp.dest(__dirname + '/orig/'))
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
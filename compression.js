const imagemin = require('imagemin');
const imageminZopfli = require('imagemin-zopfli');
const imageminPngquant = require('imagemin-pngquant');

const imagePath = 'images';

(async () => {
    await imagemin(
        [`${imagePath}/*.png`],
        {
            destination: 'zopfli_compressed',
            plugins: [
                imageminZopfli({ more: true })
            ]
        }
    );

    await imagemin(
        [`${imagePath}/*.png`],
        {
            destination: 'pngquant_compressed',
            plugins: [
                imageminPngquant({
                    quality: [0.6, 0.8]
                })
            ]
        }
    );

    await imagemin(
        [`${imagePath}/*.png`],
        {
            destination: 'pngquant_zopfli_compressed',
            plugins: [
                imageminPngquant({
                    quality: [0.6, 0.8]
                }),
                imageminZopfli({ more: true })
            ]
        }
    );

    await imagemin(
        [`${imagePath}/*.png`],
        {
            destination: 'zopfli_pngquant_compressed',
            plugins: [
                imageminZopfli({ more: true }),
                imageminPngquant({
                    quality: [0.6, 0.8]
                })
            ]
        }
    );
})();
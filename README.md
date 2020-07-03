# Image Compression Benchmarking
Simple image compression algorithm benchmarking experiment using pngquant and zopfli

## Current Results
- images (2.97MB) --> real uncompressed images folder<br/>
- pngquant_compressed (817KB) -> compressed 73% using pngquant<br/>
- zopfli_compressed (2.44MB) -> compressed 18% using zopfli<br/>
- zopfli_pngquant_compressed (815KB) -> compressed 73% using zopfli and pngquant respectively<br/>
- pngquant_zopfli_compressed (752KB) -> compressed 75% using pngquant and zopfli respectively<br/>


## How to Use
This experiment is using `imagemin` library, so you have to install the dependencies first
```javascript
npm install
// or
yarn
```
and then run the `compression.js` with node
```
node compression.js
```

## Experimenting with your own data
Just replace image files in `images` folder with your own

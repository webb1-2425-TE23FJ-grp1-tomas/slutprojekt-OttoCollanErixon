const sharp = require('sharp');
const fs = require('fs');
const assetsDir = './Bilder/Kladesplagg';
const outputDir = './Bilder/OptadeKladesplagg'


let files = fs.readdirSync(assetsDir);
for (file of files) {
    let filename = file.slice(0, file.indexOf("."));

    sharp(`${assetsDir}/${file}`)
        .webp({quality:60})
        .toFile(`${outputDir}/${filename}-60.webp`)
    
    sharp(`${assetsDir}/${file}`)
        .webp({quality:80})
        .toFile(`${outputDir}/${filename}-80.webp`)
}

// sharp('Bilder/Kladesplagg/ValstarJacka.webp')
//     .webp({ quality: 80 })
//     .toFile('Valstarjacka80.webp', (err, info) => {
//     });
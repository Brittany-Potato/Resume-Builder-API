const libre = require('libreoffice-convert');
const fs = require('fs');
const path = require('path');

function convertDocxToPdf(inputPath, outputPath) {
    const file = fs.readFileSync(inputPath);
    libre.convert(file, '.pdf', undefined, (err, done) => {
        if (err) throw err;
        fs.writeFileSync(outputPath, done);
    });
}
module.exports = convertDocxToPdf;
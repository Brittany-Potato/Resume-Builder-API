const fs = require('fs');
const PizZip = require('pizzip');
const Docxtemplater = require('docxtemplater');

function generateDocx(data, outputPath) {
    const template = fs.readFileSync('./templates/resume-template.docx', 'binary');
    const zip = new PizZip(template);
    const doc = new Docxtemplater(zip);
    doc.setData(data);
    doc.render();
    const buf = doc.getZip().generate({ type: 'nodebuffer' });
    fs.writeFileSync(outputPath, buf);
}
module.exports = generateDocx;
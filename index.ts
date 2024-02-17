import { PDFDocument } from 'pdf-lib';
const fs = require('fs');
const { decycle } = require('json-cyclic');

(async function(){
    const pdfData = fs.readFileSync(process.argv[2]);
    const pdfDoc = await PDFDocument.load(pdfData)

    const pages = pdfDoc.getPages()
    const firstPage = pages[0]
    // console.dir(pages)
    console.log(JSON.stringify(decycle(pages)));
})();
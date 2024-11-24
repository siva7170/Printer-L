// import getDefaultPrinter from './printer-l/get-default-printer.js';
// import getPrinterList from './printer-l/get-printer-list.js';
// import getPrinterListInfo from './printer-l/get-printer-list-info.js';
// import doPrint from './printer-l/do-print.js';

import { getDefaultPrinter, getPrinterList, getPrinterListInfo, doPrint } from './../src/index.js'

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Default Printer: ',await getDefaultPrinter());

console.log('Available Printers Info: ',await getPrinterListInfo());

console.log('Available Printers: ',await getPrinterList());

const pdfPath = path.resolve(__dirname, './../out_z4.pdf');

console.log('>>>',pdfPath)

console.log('Do Print: ',await doPrint({ 
    printer_name: '80mm Series Printer', 
    srcPath:pdfPath,
    printpreview:'yes'
}));

//getPrinterListInfo();
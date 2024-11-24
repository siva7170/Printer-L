import execFileAsync from "../../utils/exec-file-async.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function doPrint(source) {
  try {
    const target = { printpreview: 'no', filetype: 'PDF', printer_name: '', srcPath:'' }; 
    const extended = Object.assign(target, source);
    //const exePath = path.resolve(__dirname, './../depends/PrintL.exe');
    const exePath = path.resolve(__dirname, './../../depends/PrinterL2.exe');

    const args=[
        "--for",
        "do_print",
        "--print_preview",
        extended.printpreview,
        "--filetype",
        extended.filetype,
        "--printer_name",
        extended.printer_name,
        "--src",
        extended.srcPath
    ];

    const { stdout } = await execFileAsync(exePath, args);


    if (!stdout) return null;

    const printer = stdout.trim();
    return printer;
  } catch (error) {
    throw error;
  }
}

export default doPrint;
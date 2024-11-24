import execFileAsync from "../../utils/exec-file-async.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getPrinterList() {
  try {
    //const exePath = path.resolve(__dirname, './../depends/PrintL.exe');
    const exePath = path.resolve(__dirname, './../../depends/PrinterL2.exe');
    const { stdout } = await execFileAsync(exePath, [
      "--for",
      "printer_list",
    ]);

    if (!stdout) return null;
    
    const printerN = [];

    stdout
      .split(/(\r?\n)/)
      .map((printer) => printer.trim())
      .filter((printer) => !!printer)
      .forEach((printer) => {
        printerN.push(printer);
      });
      
      return printerN;
  } catch (error) {
    throw error;
  }
}

export default getPrinterList;
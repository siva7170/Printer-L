import execFileAsync from "../../utils/exec-file-async.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getPrinterListInfo() {
  try {
    //const exePath = path.resolve(__dirname, './../depends/PrintL.exe');
    const exePath = path.resolve(__dirname, './../../depends/PrinterL2.exe');
    const { stdout } = await execFileAsync(exePath, [
      "--for",
      "printer_info_list",
    ]);

    const printerI = [];

    if (!stdout) return null;
    
    stdout
      .split(/(\r?\n)/)
      .map((printer) => printer.trim())
      .filter((printer) => !!printer)
      .forEach((printer) => {
        var pInfo=printer.split(':-:');
        printerI.push({
            pName: pInfo[0],
            pPortName: pInfo[1],
            pDataType: pInfo[2],
            pDriverName: pInfo[3],
            pComment: pInfo[4],
            pLocation: pInfo[5]
        });
      });

    return printerI;
  } catch (error) {
    throw error;
  }
}

export default getPrinterListInfo;
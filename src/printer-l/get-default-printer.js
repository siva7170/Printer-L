import execFileAsync from "../../utils/exec-file-async.js";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function getDefaultPrinter() {
  try {
    //const exePath = path.resolve(__dirname, './../depends/PrintL.exe');
    const exePath = path.resolve(__dirname, './../../depends/PrinterL2.exe');
    const { stdout } = await execFileAsync(exePath, [
      "--for",
      "default_printer",
    ]);


    if (!stdout) return null;

    const printer = stdout.trim();

    return printer;
  } catch (error) {
    throw error;
  }
}

export default getDefaultPrinter;
/** ------ Caminhos de arquivos ------ */

import path from "path";
import url from "url";

const filePath = "./dir1/dir2/test.txt";

// O último nome do caminho - basename()
console.log(path.basename(filePath));

// O caminho completo - dirname()
console.log(path.dirname(filePath));

// A extensão do arquivo - extname()
console.log(path.extname(filePath));

// Transforma o arquivo em um objeto JS - parse()
console.log(path.parse(filePath));

// Entraga os caminhos e os arquivos
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__filename);
console.log(__dirname);

// Responde um caminho criado baseado nos parâmetros - join()
const filePathJoin = path.join(__dirname, "dir1", "dir2", "test.txt");
console.log(filePathJoin);

// Responde o mesmo do que join() - resolve()
const filePathResolve = path.resolve(__dirname, "dir1", "dir2", "test.txt");
console.log(filePathResolve);

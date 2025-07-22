/** ------ Arquivos de sistema ------ */

// import fs from "fs";
import fs from "fs/promises";

// // Callback para readFile()
// fs.readFile("./text.txt", "utf-8", (err, data) => {
//   if (err) throw err;
//   console.log(data);
// });

// // Versão síncrona - readFileSync()
// const data = fs.readFileSync("./text.txt", "utf-8");
// console.log(data);

// // Versão com Promise  - readFile()
// fsPromises
//   .readFile("./text.txt", "utf-8")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// Com async e await
const readFile = async () => {
  try {
    const data = await fs.readFile("../text.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// Escrever um texto de arquivo
const writeFile = async () => {
  try {
    await fs.writeFile("../text.txt", "Estou escrevendo algo.");
    console.log("Escrita salva!");
  } catch (error) {
    console.log(error);
  }
};

// Adicionar escrita a um arquivo
const appendFile = async () => {
  try {
    await fs.appendFile("../text.txt", "\nIsso foi adicionado.");
    console.log("Texto adicionado...");
  } catch (error) {
    console.log(error);
  }
};

appendFile();
writeFile();
readFile();

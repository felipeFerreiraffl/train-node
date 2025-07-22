import http from "http";
import fs from "fs/promises"; // File System
import url from "url";
import path from "path";
const PORT = process.env.PORT; // Importação da variável de ambiente

// Busca o arquivo atual
const __filename = url.fileURLToPath(import.meta.url); // Transforma um arquivo em um caminho URL
const __dirname = path.dirname(__filename); // Pega o caminho do arquivo, mas sem o arquivo em si

// Criação de um servidor de requisição (req) e resposta (res)
const server = http.createServer(async (req, res) => {
  // res.setHeader("Content-Type", "text/html"); // Criação de conteúdo (HTML)
  // res.statusCode = 200; // Definiçõa de status
  //   console.log("Rota: ", req.url); // URL da página
  //   console.log("Método: ", req.method); // Método (GET, POST, PUT e DELETE)

  // Verificação de método GET
  try {
    if (req.method === "GET") {
      let filePath;

      if (req.url === "/") {
        // Mesmo do código acima, porém de forma direta e condensada
        // res.writeHead(200, { "Content-Type": "application/json" });
        // res.write(JSON.stringify({ message: "OK" }));
        // res.end(); // Término

        filePath = path.join(__dirname, "public", "index.html"); // Junta os parâmetros para formar um nome de um arquivo
      } else if (req.url === "/sobre") {
        // Mesmo do código acima, porém de forma direta e condensada
        // res.writeHead(200, { "Content-Type": "application/json" });
        // res.write(JSON.stringify({ message: "About" }));
        // res.end(); // Término

        filePath = path.join(__dirname, "public", "about.html");
      } else {
        // Mesmo do código acima, porém de forma direta e condensada
        // res.writeHead(404, { "Content-Type": "application/json" });
        // res.write(JSON.stringify({ message: "Not found" }));
        // res.end(); // Término

        throw new Error("Not Found");
      }

      const data = await fs.readFile(filePath); // Lê o arquivo e renderiza
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Método não permitido");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "application/json" });

    res.write(JSON.stringify({ message: "Erro de servidor" }));
    res.end(); // Término
  }
});

// Mensagem do servidor, que escuta em uma porta específica
server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

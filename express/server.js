/* ----- Arquivo para servidor ----- */

import e from "express";
import path from "path";
import logger from "./middleware/logger.js";
import posts from "./routes/posts.js";
import errorHandler from "./middleware/error.js";
import notFoundHandler from "./middleware/notFound.js";
import { fileURLToPath } from "url";
const PORT = process.env.PORT || 8000;

// Pegar o caminho do diretório
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Chamada da biblioteca do Express
const app = e();

// Middleware para transformar um body
app.use(e.json());
app.use(e.urlencoded({ extended: false }));

// Definição de rota
// app.get("/", (req, res) => {
//   res.send({ message: "Hello World!" }); // Não é necessário passar manualmente para JSON
// });
// app.get("/sobre", (req, res) => {
//   res.send({ message: "Página de sobre" }); // Não é necessário passar manualmente para JSON
// });

// Setup para pastas estáticas (CommonJS)
app.use(e.static(path.join(__dirname, "public")));

// // Pegar caminhos HTML estáticos
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/sobre", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "sobre.html"));
});

// // Manipulação de JSON (pegar todos os posts)
// app.get("/api/posts", (req, res) => {
//   const limit = parseInt(req.query.limit);

//   // Verifica se há um limite nos queries
//   if (!isNaN(limit) && limit > 0) {
//     // Retorna dados baseado no limite
//     return res.status(200).json(posts.slice(0, limit));
//   }

//   // status() retorna o status
//   res.status(200).json(posts);
// });

// // Pegar um post
// // É possível pegar um elemento de um JSON, no caso, ID
// app.get("/api/post/:id", (req, res) => {
//   // console.log(req.params); // Pegar os parâmetros de uma requisição
//   const id = parseInt(req.params.id);
//   const post = posts.find((post) => post.id === id);

//   if (!post) {
//     return res.status(404).json({ error: `ID ${id} não encontrado!` });
//   }

//   res.status(200).json(posts.filter((post) => post.id === id));
// });

// Utiliza-se como um middleware, com uma rota única
app.use("/api/posts", logger, posts);

// Erro de requisição
app.use(notFoundHandler);

// Uso do middleware de erro
app.use(errorHandler);

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

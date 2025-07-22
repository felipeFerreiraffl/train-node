import { createServer } from "http"; // Método para criar um servidor
const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Felipe", age: 21 },
  { id: 2, name: "Jefferson", age: 35 },
  { id: 3, name: "Roberto", age: 28 },
];

// Middleware de loggers
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
};

// Middleware de JSON
const jsonMiddleware = (req, res, next) => {
  res.setHeader("Content-Type", "application/json");
  next();
};

// Handler de rotas de GET api/users
const getUsersHandler = (req, res) => {
  res.write(JSON.stringify(users));
  res.end();
};

// Handler de rotas de GET api/users/:id
const getUsersByIdHandler = (req, res) => {
  const id = req.url.split("/")[3];
  const user = users.find((user) => user.id === parseInt(id));

  if (user) {
    res.write(JSON.stringify(user));
    res.end();
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "Usuário não encontrado" }));
    res.end();
  }
};

// Handler de mensagens 404
const notFoundHandler = (req, res) => {
  res.statusCode = 404;
  res.write(JSON.stringify({ message: "Rota não encontrada" }));
  res.end();
};

// Handle de método POST /api/users
const createUserHandler = (req, res) => {
  let body = "";

  // Um evento de listen para adicionar usuários
  req.on("data", (chunk) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    const newUser = JSON.parse(body);
    users.push(newUser);
    res.statusCode = 201;
    res.write(JSON.stringify(newUser));
    res.end();
  });
};

const server = createServer((req, res) => {
  logger(req, res, () => {
    jsonMiddleware(req, res, () => {
      if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res);
      } else if (
        req.url.match(/\/api\/users\/([0-9]+)/) &&
        req.method === "GET"
      ) {
        getUsersByIdHandler(req, res);
      } else if (req.url === "/api/users" && req.method === "POST") {
        createUserHandler(req, res);
      } else {
        notFoundHandler(req, res);
      }
    });

    // if (req.url === "/api/users" && req.method === "GET") {
    //   res.setHeader("Content-Type", "application/json");
    //   res.write(JSON.stringify(users));
    //   res.end();
    // } else if (
    //   req.url.match(/\/api\/users\/([0-9]+)/) &&
    //   req.method === "GET"
    // ) {
    //   // Forma de escrever um caminho dinâmico

    //   res.setHeader("Content-Type", "application/json");

    //   // Pegar o ID e o usuário
    //   const id = req.url.split("/")[3];
    //   const user = users.find((user) => user.id === parseInt(id));

    //   if (user) {
    //     res.write(JSON.stringify(user));
    //     res.end();
    //   } else {
    //     res.statusCode = 404;
    //     res.write(JSON.stringify({ message: "Usuário não encontrado" }));
    //     res.end();
    //   }
    // } else {
    //   res.setHeader("Content-Type", "application/json");
    //   res.statusCode = 404;
    //   res.write(JSON.stringify({ message: "Rota não encontrada" }));
    //   res.end();
    // }
  });
});

server.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

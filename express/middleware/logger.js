import colors from "colors";

// Middleware para acessar requisições e respostas
const logger = (req, res, next) => {
  const methodColors = {
    GET: "green",
    POST: "blue",
    PUT: "yellow",
    DELETE: "red",
  };

  // Troca de cor baseado na requisição feita
  const color = methodColors[req.method] || "white";

  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`[
      color
    ]
  );
  next();
};

export default logger;

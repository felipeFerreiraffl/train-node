import app from "./app.js";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";

// Configuração do caminho do .env
dotenv.config();

const PORT = process.env.PORT || 8000;

// Importa como uma função que retorna Promise
dbConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});

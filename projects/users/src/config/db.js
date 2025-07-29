/* ----- Conexão com o banco de dados MongoDB ----- */

// Mongoose lida com a conexão entre o Node e MongoDB
import mongoose from "mongoose";

// Conecta com o banco de dados a partir da variável de ambiente
const dbConnection = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB conectado: ${connection.connection.host}`);
  } catch (err) {
    console.error(`Erro ao tentar se conectar ao MongoDB: ${err.message}`);
    process.exit(1); // Saia do processo/aplicação
  }
};

export default dbConnection;

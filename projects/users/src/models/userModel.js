import mongoose from "mongoose";

// Criação de um objeto no banco de dados, como uma classe no Java
const userSchema = new mongoose.Schema({
  /* Atributos
        <attr>: { type: type, required : boolean }
        type - Tipo do atributo (String, boolean, int, etc)
        required - Se ele deve estar preenchido
    */

  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Definição do modelo no banco de dados
const User = mongoose.model("User", userSchema);

export default User;

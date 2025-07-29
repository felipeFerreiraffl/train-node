import User from "../models/userModel.js";

// Buscar todos os usuários
export const getUsers = async (req, res) => {
  try {
    const data = await User.find();
    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Não foi possível buscar usuários", err: error.message });
  }
};

export const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await User.findById(id);

    if (!data) {
      res.status(404).json({ msg: `Usuário com ID ${data} não encontrado` });
    }

    res.status(200).json(data);
  } catch (error) {
    res
      .status(500)
      .json({ msg: "Não foi possível buscar usuários", err: error.message });
  }
};

// Criação de um usuário
export const createUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body; // Passar requisições ao body
    const data = await User.create({ name, email, password });
    res.status(201).json(data);
  } catch (error) {
    res.status(500).json({ msg: "Erro ao criar usuário", err: error.message });
  }
};

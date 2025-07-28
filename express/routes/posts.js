/* ----- Um dos arquivos de rota ----- */

import e from "express";
import {
  createPost,
  deletePost,
  getPostById,
  getPosts,
  updatePost,
} from "../controller/postsController.js";
const router = e.Router();

// Com o router, não é necessário repetir o nome da rota
router.get("/", getPosts);

router.get("/:id", getPostById);

// Criar um novo objeto (POST)
router.post("/", createPost);

// Atualizar um objeto (PUT)
router.put("/:id", updatePost);

// Deletar um objeto (DELETE)
router.delete("/:id", deletePost);

export default router;

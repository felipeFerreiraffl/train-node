import express from "express";
import {
  createUsers,
  getUsers,
  getUsersById,
} from "../controller/usersController.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUsersById);
router.post("/", createUsers);

export default router;

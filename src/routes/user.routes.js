import express from "express";
import { createUser, getAllUsers, getUserById, updateUser } from "../controllers/user.controller.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/", validateUser, createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);
router.put("/:id", validateUser, updateUser);

export default router;

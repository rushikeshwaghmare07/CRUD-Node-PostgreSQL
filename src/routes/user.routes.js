import express from "express";
import { createUser, getAllUsers, getUserById } from "../controllers/user.controller.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/", validateUser, createUser);
router.get("/", getAllUsers);
router.get("/:id", getUserById);

export default router;

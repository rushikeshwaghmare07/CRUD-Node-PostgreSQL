import express from "express";
import { createUser, getAllUsers } from "../controllers/user.controller.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

router.post("/", validateUser, createUser);
router.get("/", getAllUsers);

export default router;

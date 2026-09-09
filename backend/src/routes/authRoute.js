import express from "express";
import { registerUser, login, getMe } from "../controllers/authController.js";
import protectApis from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);

export default router;

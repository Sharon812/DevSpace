import express from "express";
import {
  registerUser,
  login,
  getMe,
  logout,
  register,
} from "../controllers/authController.js";
import protectApis from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login);
router.get("/me", protectApis, getMe);
router.post("/logout", logout);
router.post("/register", register);

export default router;

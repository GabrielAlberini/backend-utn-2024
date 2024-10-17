import { Router } from "express";
import { register, login } from "../controllers/authController.js";

const authRoutes = Router();

// /api/auth
authRoutes.post("/register", register);
// /api/auth
authRoutes.post("/login", login);

export { authRoutes };

// http://localhost:1234/api/auth/register

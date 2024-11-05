import { Router } from "express"
import { login, register } from "../controllers/authController.js"

const authRoutes = Router()

authRoutes.post("/register", register)
authRoutes.post("/login", login)

export { authRoutes }
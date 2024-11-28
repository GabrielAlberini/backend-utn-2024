import { Router } from "express";
import { register, login } from "../controllers/userController"

const userRouter = Router()

// /api/products
userRouter.post("/register", register)
userRouter.post("/login", login)

export { userRouter }
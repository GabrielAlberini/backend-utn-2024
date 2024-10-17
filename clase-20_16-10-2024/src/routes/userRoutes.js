import { Router } from "express";
import { getUsers, getUserByData } from "../controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const userRoutes = Router();

// todas la peticiones que llegan acá contienen "/api/users/"
// aca nunca va a entrar una peticion que comience con "/api/products"

userRoutes.get("/", authMiddleware, getUsers);

// "/api/users"
// obetener un registro por un parametro
// http://localhost:1114/api/users/1
userRoutes.get("/:data", getUserByData);

export { userRoutes };

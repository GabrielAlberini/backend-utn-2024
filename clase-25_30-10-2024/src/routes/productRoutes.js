import { Router } from "express"
import { getAllProducts } from "../controllers/productController.js"
import { auth } from "../middlewares/authMiddleware.js"

const productsRoutes = Router()

productsRoutes.get("/", auth, getAllProducts)

export { productsRoutes }
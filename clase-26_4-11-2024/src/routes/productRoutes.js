import { Router } from "express"
import { addProduct, getAllProducts } from "../controllers/productController.js"
import { auth } from "../middlewares/authMiddleware.js"

const productsRoutes = Router()

productsRoutes.get("/", auth, getAllProducts)
productsRoutes.post("/", auth, addProduct)

export { productsRoutes }
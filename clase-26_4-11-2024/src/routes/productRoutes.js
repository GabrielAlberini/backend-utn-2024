import { Router } from "express"
import { addProduct, getAllProducts } from "../controllers/productController.js"

const productsRoutes = Router()

productsRoutes.get("/", getAllProducts)
productsRoutes.post("/", addProduct)

export { productsRoutes }
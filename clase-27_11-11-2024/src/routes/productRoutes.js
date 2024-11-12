import { Router } from "express"
import { addProduct, getAllProducts, getProductById } from "../controllers/productController.js"

const productsRoutes = Router()

productsRoutes.get("/", getAllProducts)
productsRoutes.post("/", addProduct)
productsRoutes.get("/:id", getProductById)

export { productsRoutes }
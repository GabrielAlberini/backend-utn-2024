import { Router } from "express";
import { addProduct, getAllProducts } from "../controllers/productController"

const productRouter = Router()

// /api/products
productRouter.get("/", getAllProducts)
productRouter.post("/", addProduct)

export { productRouter }
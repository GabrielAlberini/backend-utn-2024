// endpoints de recursos
import { Router } from "express"
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from "../controllers/productController.js"

const ProductRoutes = Router()

/* /api/products */
ProductRoutes.get("/", getAllProducts)
ProductRoutes.get("/:id", getProductById)
ProductRoutes.post("/", createProduct)
ProductRoutes.patch("/:id", updateProduct)
ProductRoutes.delete("/:id", deleteProduct)

export { ProductRoutes }

import { Router } from "express";
import { addProduct, getAllProducts, updateProduct, deleteProduct } from "../controllers/productController"
import { authMiddleware } from "../middleware/authMiddleware";

const productRouter = Router()

productRouter.use(authMiddleware)

// /api/products
productRouter.get("/", getAllProducts)
productRouter.post("/", addProduct)
productRouter.patch("/:id", updateProduct)
productRouter.delete("/:id", deleteProduct)

export { productRouter }
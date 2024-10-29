import { Router } from "express";
import { products } from "../data/products.js";

const productRoutes = Router();

// aca llegan todas las peticiones que comienzan con "/api/products"

// "/" -> devolver todos los productos
productRoutes.get("/", (req, res) => {
  res.json(products);
});

// "/:id" -> devolve un producto por su id
productRoutes.get("/:id", (req, res) => {
  const { id } = req.params;
  const product = products.find((p) => p.id === id);
  if(!product) res.status(404).json({error: "product not found"})
  res.json(product);
});

export { productRoutes };

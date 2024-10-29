import express from "express";
import dotenv from "dotenv";
import { ProductRoutes } from "./src/routes/productRoutes.js";
import { connectdb } from "./src/config/mongo.js";

dotenv.config();

const PORT = process.env.PORT;

const app = express();

// use -> se ejecuta en todas las peticiones sin importar el método
app.use(express.json())

// productos -> /api/products -> ProductRoutes
app.use("/api/products", ProductRoutes)

// usuarios -> /api/users -> UserRoutes
// compras -> /api/purchase -> PurchaseRoutes
// auth -> /api/auth -> AuthRoutes
// ventas -> /api/sales -> SalesRoutes

app.listen(PORT, () => {
  connectdb()
  console.log("Server up on port http://localhost:" + PORT)
})
import express from "express"
import { connectDb } from "./src/config/mongoConnection.js";
import { productsRoutes } from "./src/routes/productRoutes.js";
import { authRoutes } from "./src/routes/authRoutes.js"

process.loadEnvFile();

const PORT = process.env.PORT

const app = express()
app.use(express.json())

app.use("/api/products", productsRoutes)
app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
  console.log("Servidor en encucha en el puerto http://localhost:" + PORT)
  connectDb()
})
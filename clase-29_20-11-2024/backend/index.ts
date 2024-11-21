import { connectDB } from "./src/config/mongo"
import express from "express"
import { productRouter } from "./src/routes/productRouter"
import cors from "cors"

process.loadEnvFile()

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(cors())

connectDB()

app.use("/api/products", productRouter)

app.listen(PORT, () => {
  console.log("Servidor en escucha por el puerto http://localhost:" + PORT)
})
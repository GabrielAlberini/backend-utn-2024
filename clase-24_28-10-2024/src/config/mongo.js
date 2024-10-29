// Configuración para la conexión a la base de datos
import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const URI_DB = process.env.URI_DB

const connectdb = async () => {
  try {
    await mongoose.connect(URI_DB)
    console.log("Conexión exitosa a la base de datos")
  } catch (error) {
    console.log("Conexión fallida a la base de datos")
  }
}

export { connectdb }
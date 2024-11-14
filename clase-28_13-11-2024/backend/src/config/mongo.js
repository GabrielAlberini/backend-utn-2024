import mongoose from "mongoose"
process.loadEnvFile()

const URI_DB = process.env.URI_DB

const connectDB = async () => {
  try {
    await mongoose.connect(URI_DB)
    console.log("Conexión exitosa a la base de datos")
  } catch (error) {
    console.log("Error al conectarse a mongoDB")
  }
}

export { connectDB }
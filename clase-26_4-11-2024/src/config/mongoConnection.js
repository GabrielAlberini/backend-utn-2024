import mongoose from "mongoose"
process.loadEnvFile();

const URI_DB = process.env.URI_DB

const connectDb = async () => {
  try {
    await mongoose.connect(URI_DB)
    console.log("Conexión a la db éxitosa")
  } catch (error) {
    console.log("Error al conectarse a la base de datos", error)
  }
}

export { connectDb }
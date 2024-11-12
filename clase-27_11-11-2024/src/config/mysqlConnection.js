import { Sequelize } from "sequelize";
process.loadEnvFile();

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PASS = process.env.DB_PASS
const DB_HOST = process.env.DB_HOST

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  host: DB_HOST,
  dialect: "mysql"
})

const connectDb = async () => {
  try {
    await sequelize.authenticate()
    console.log("Conexión a la db éxitosa")
  } catch (error) {
    console.log("Error al conectarse a la base de datos", error)
  }
}

export { connectDb, sequelize }
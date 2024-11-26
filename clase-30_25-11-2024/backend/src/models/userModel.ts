import { Request, Response } from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import { UserData } from "../interfaces/UserData";

process.loadEnvFile()

const JWT_SECRET = process.env.JWT_SECRET || ""

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, { versionKey: false })

const User = mongoose.model("user", userSchema)

const register = async (data: UserData) => {
  try {
    const hashedPassword = await bcryptjs.hash(data.password, 10)
    const newUser = new User({ username: data.username, password: hashedPassword })
    await newUser.save()
    return newUser
  } catch (error) {
    throw new Error("Error al registrar un nuevo usuario")
  }
}

const login = async (data: UserData) => {
  try {
    const user = await User.findOne({ username: data.username })
    if (!user || !(await bcryptjs.compare(data.password, user.password))) {
      throw new Error("El usuario o la contraseña son incorrectas")
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1h" })

    return token
  } catch (error) {
    throw new Error("Error al iniciar sesión")
  }
}

export default { User, register, login }
import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs"

// name, price, description, stock

const userSchema = new Schema({
  username: { type: String },
  password: { type: String },
  email: { type: String }
})

const User = model("users", userSchema)

const register = async (dataUser) => {
  const { username, password, email } = dataUser

  const existingUser = await User.findOne({ username })
  if (existingUser) {
    return null
  }

  const alg = await bcryptjs.genSalt(10)
  const hashedPass = await bcryptjs.hash(password, alg)

  const newUser = new User({ username, password: hashedPass, email })
  const savedUser = await newUser.save()
  return savedUser
}

export default { register }
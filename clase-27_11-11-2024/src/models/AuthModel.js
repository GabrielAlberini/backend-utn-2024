import { DataTypes } from "sequelize";
import { sequelize } from "../config/mysqlConnection.js";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";

const User = sequelize.define('user', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false, // Desactiva createdAt y updatedAt si no los necesitas
});

const register = async ({ username, password, email }) => {
  const existingUser = await User.findOne({ where: { username } })
  if (existingUser) {
    return null
  }

  const salt = await bcryptjs.genSalt(10)
  const hashedPass = await bcryptjs.hash(password, salt)

  const newUser = await User.create({ username, password: hashedPass, email })

  return newUser
}

const login = async ({ username, password }) => {
  const existingUser = await User.findOne({ where: { username } })

  if (!existingUser) {
    return null
  }

  console.log(existingUser.password)

  const isMatch = await bcryptjs.compare(password, existingUser.password);

  if (!isMatch) {
    return null
  }

  const payload = {
    id: existingUser.id, username: existingUser.username
  }

  const JWT_SECRET = process.env.JWT_SECRET

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" })

  return { user: existingUser, token }
}

export default { User, register, login }
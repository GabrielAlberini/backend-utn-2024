import User from "../models/AuthModel.js"

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body
    const newUser = await User.register({ username, password, email })
    if (!newUser) {
      return res.status(400).json({ error: "El usuario ya existe" })
    }
    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error interno del servidor" });
  }
}
const login = async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await User.login({ username, password })

    if (!user) {
      return res.status(400).json({ error: "Nombre de usuario o contraseña incorrecta" })
    }

    res.status(200).json(user)
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

export { register, login }
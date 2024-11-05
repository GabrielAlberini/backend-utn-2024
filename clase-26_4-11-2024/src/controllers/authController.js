import AuthModel from "../models/AuthModel.js"
import jwt from "jsonwebtoken"

process.loadEnvFile();

const JWT_SECRET = process.env.JWT_SECRET
console.log(JWT_SECRET)

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body
    if (!username || !password || !email) {
      return res.status(400).json({ error: "bad request, invalid data" })
    }

    const newUser = await AuthModel.register({ username, password, email })
    if (newUser === null) {
      return res.status(400).json({ error: "user already exists" })
    }

    res.status(201).json(newUser)
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "internal server error" })
  }
}

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: "Username and password are required" });
    }

    const user = await AuthModel.login({ username, password });

    if (!user) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '1h' }); // Expira en 1 hora

    return res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username }, token });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error: error.message });
  }
};


export { register, login };

import AuthModel from "../models/authModel.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "bad request, invalid data" });
    }

    const existingUser = AuthModel.findUserByEmail(email);
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "bad request, user already exists" });
    }

    const newUser = await AuthModel.createNewUser(username, email, password);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "bad request, invalid data" });
  }

  const user = AuthModel.findUserByEmail(email);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  const isMatch = await AuthModel.verifyPassword(password, user.password);

  if (!isMatch) {
    return res.status(400).json({ error: "bad request, invalid password" });
  }

  // sign necesita tres parametros -> data, clave secreta (necesita definir el back y el front la tiene que usar), cuando expira
  const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({ token });
};

export { register, login };

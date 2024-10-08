import express from "express";
import bcryptjs from "bcryptjs";
import { randomUUID } from "node:crypto";
import jwt from "jsonwebtoken";

let users = [];

const app = express();
app.use(express.json());

// 1 && 65300
const PORT = process.env.PORT || 3002;

// SISTEMA DE SESIÓN
// /login
// /register

app.post("/register", async (req, res) => {
  try {
    const { username, password, email } = req.body;

    if (!username || !password || !email) {
      return res.status(400).json({ error: "bad request, invalid data" });
    }

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return res
        .status(400)
        .json({ error: "bad request, user already exists" });
    }

    // paso 1 - generar id
    // paso 2 - hashear pass
    const id = randomUUID();
    const alg = await bcryptjs.genSalt(10);
    const hashedPass = await bcryptjs.hash(password, alg);

    const newUser = {
      id,
      username,
      email,
      password: hashedPass,
    };

    // guardar el nuevo usaurio en la base de datos
    users.push(newUser);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "bad request, invalid data" });
  }

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ error: "user not found" });
  }

  const isMatch = await bcryptjs.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ error: "invalid password" });
  }

  // sign necesita tres parametros -> data, clave secreta (necesita definir el back y el front la tiene que usar), cuando expira
  const token = jwt.sign({ username: user.username }, "pepe", {
    expiresIn: "1h",
  });

  res.json({ token });
});

// Middleware

app.listen(PORT, () => {
  console.log(`Server on listening on port http://localhost:${PORT}`);
});

import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { userRoutes } from "./src/routes/userRoutes.js";
import { productRoutes } from "./src/routes/productRoutes.js";
import { authRoutes } from "./src/routes/authRoutes.js";

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

app.use("*", (req, res) => {
  res.status(404).json({ error: "not found resource" });
});

app.listen(PORT, () => {
  console.log(`Server en escucucha por el puerto http://localhost:${PORT}`);
});

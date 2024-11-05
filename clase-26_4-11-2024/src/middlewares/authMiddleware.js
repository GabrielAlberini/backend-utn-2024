import jwt from 'jsonwebtoken';
process.loadEnvFile()

const JWT_SECRET = process.env.JWT_SECRET; // Usa la misma clave secreta que en el controlador de login

const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Obtener el token del encabezado Authorization

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(400).json({ message: "Invalid token." });
  }
};

export { auth }
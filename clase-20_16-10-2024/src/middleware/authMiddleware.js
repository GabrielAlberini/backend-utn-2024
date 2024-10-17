import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  // quitamos del string "Bearer" quedandonos solamente con el token
  // Bearer en este caso comunica al sistma que formato de token estamos trabajando
  let token;

  if (authHeader) {
    token = authHeader.split(" ")[1];
  }

  if (!token) {
    return res.status(403).json({ error: "Forbidden" });
  }

  jwt.verify(token, JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(403).json({ error: "Forbidden" });
    }
    next();
  });
};

export { authMiddleware };

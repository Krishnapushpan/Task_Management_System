import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

function verifyToken(req, res, next) {
  const token = req.cookies.Authtoken;
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export { verifyToken };

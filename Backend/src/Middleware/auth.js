import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

function verifyToken(req, res, next) {
  // Get token from cookie or Authorization header
  const token =
    req.cookies.Authtoken ||
    (req.headers.authorization && req.headers.authorization.split(" ")[1]);

  if (!token) return res.status(401).json({ error: "Access denied" });
  console.log("Token received:", token);

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.role = decoded.role;
    req.userId = decoded._id || decoded.id;
    req.email = decoded.email;
    req.fullName = decoded.fullName;
    next();
  } catch (error) {
    console.error("Token verification error:", error);
    res.status(401).json({ error: "Invalid token" });
  }
}

export { verifyToken };

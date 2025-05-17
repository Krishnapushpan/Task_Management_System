import express from "express";
import userRoutes from "./User/routes/UsersRoute.js";

const router = express.Router();

// Mount all routes with their respective paths
router.use("/users", userRoutes);

export default router;
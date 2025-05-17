import express from "express";
import userRoutes from "./User/routes/UsersRoute.js";

const router = express.Router();

// Mount user routes
router.use("/users", userRoutes);

export default router;
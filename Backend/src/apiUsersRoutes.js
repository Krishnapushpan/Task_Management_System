import express from "express";
import userRoutes from "./User/routes/UsersRoute.js";
import projectRoutes from "./Project/routes/ProjectRoute.js";

const router = express.Router();

// User routes
router.use("/users", userRoutes);

// Project routes
router.use("/projects", projectRoutes);

export default router;

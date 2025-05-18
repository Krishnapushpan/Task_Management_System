import express from "express";
import userRoutes from "./User/routes/UsersRoute.js";
import projectRoutes from "./Project/routes/ProjectRoute.js";
import assignTeamRoutes from "./AssignTeam/routes/AssignTeamRoute.js";

const router = express.Router();

// User routes
router.use("/users", userRoutes);

// Project routes
router.use("/projects", projectRoutes);

// Assign Team routes
router.use("/teams", assignTeamRoutes);

export default router;

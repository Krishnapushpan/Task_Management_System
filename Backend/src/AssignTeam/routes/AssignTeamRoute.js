import express from "express";
import {
  assignTeam,
  getTeamByProject,
  getAllTeamAssignments,
} from "../controllers/AssignTeamController.js";
import { verifyToken } from "../../Middleware/auth.js";

const router = express.Router();

// Assign team to a project (requires authentication)
router.post("/assign", verifyToken, assignTeam);

// Get team assignment for a specific project (requires authentication)
router.get("/project/:projectId", verifyToken, getTeamByProject);

// Get all team assignments (requires authentication)
router.get("/all", verifyToken, getAllTeamAssignments);

export default router;

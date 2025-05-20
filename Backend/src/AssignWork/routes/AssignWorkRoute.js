import express from "express";
import {
  createWorkAssignment,
  getAllWorkAssignments,
  getWorkAssignmentsByProject,
  updateWorkAssignmentStatus,
  deleteWorkAssignment,
} from "../controllers/AssignWorkController.js";
import { verifyToken } from "../../Middleware/auth.js";

const router = express.Router();

// Create new work assignment
router.post("/create", verifyToken, createWorkAssignment);

// Get all work assignments
router.get("/all", verifyToken, getAllWorkAssignments);

// Get work assignments by project ID
router.get("/project/:projectId", verifyToken, getWorkAssignmentsByProject);

// Update work assignment status
router.put("/:id/status", verifyToken, updateWorkAssignmentStatus);

// Delete work assignment
router.delete("/:id", verifyToken, deleteWorkAssignment);

export default router;

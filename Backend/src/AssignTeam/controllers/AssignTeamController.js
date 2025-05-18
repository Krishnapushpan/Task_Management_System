import AssignTeam from "../models/AssignTeamModel.js";
import Project from "../../Project/models/ProjectModel.js";
import User from "../../User/models/UsersModel.js";

// Assign team members to a project
export const assignTeam = async (req, res) => {
  try {
    const { projectId, teamLeadId, teamMemberIds, studentIds } = req.body;

    // Validate project exists
    const project = await Project.findById(projectId);
    if (!project) {
      return res.status(404).json({ message: "Project not found" });
    }

    // Validate team lead exists if provided
    if (teamLeadId) {
      const teamLead = await User.findById(teamLeadId);
      if (!teamLead) {
        return res.status(404).json({ message: "Team lead not found" });
      }
      if (teamLead.role !== "Team Lead") {
        return res
          .status(400)
          .json({ message: "Selected user is not a team lead" });
      }
    }

    // Check if an assignment already exists for this project
    const existingAssignment = await AssignTeam.findOne({ project: projectId });

    if (existingAssignment) {
      // Update existing assignment
      existingAssignment.teamLead = teamLeadId || existingAssignment.teamLead;
      existingAssignment.teamMembers =
        teamMemberIds || existingAssignment.teamMembers;
      existingAssignment.students = studentIds || existingAssignment.students;

      await existingAssignment.save();

      // Populate details before sending response
      const updatedAssignment = await AssignTeam.findById(
        existingAssignment._id
      )
        .populate("project", "projectName description startDate endDate budget")
        .populate("teamLead", "fullName email role position")
        .populate("teamMembers", "fullName email role position")
        .populate("students", "fullName email role");

      return res.status(200).json({
        message: "Team assignment updated successfully",
        assignment: updatedAssignment,
      });
    } else {
      // Create new assignment
      const newAssignment = new AssignTeam({
        project: projectId,
        teamLead: teamLeadId,
        teamMembers: teamMemberIds,
        students: studentIds,
      });

      await newAssignment.save();

      // Populate details before sending response
      const populatedAssignment = await AssignTeam.findById(newAssignment._id)
        .populate("project", "projectName description startDate endDate budget")
        .populate("teamLead", "fullName email role position")
        .populate("teamMembers", "fullName email role position")
        .populate("students", "fullName email role");

      return res.status(201).json({
        message: "Team assigned to project successfully",
        assignment: populatedAssignment,
      });
    }
  } catch (error) {
    console.error("Assign team error:", error);
    res
      .status(500)
      .json({ message: "Failed to assign team", error: error.message });
  }
};

// Get team assignment for a specific project
export const getTeamByProject = async (req, res) => {
  try {
    const { projectId } = req.params;

    // Find the team assignment for the given project
    const teamAssignment = await AssignTeam.findOne({ project: projectId })
      .populate("project", "projectName description startDate endDate budget")
      .populate("teamLead", "fullName email role position")
      .populate("teamMembers", "fullName email role position")
      .populate("students", "fullName email role");

    if (!teamAssignment) {
      return res
        .status(404)
        .json({ message: "No team assignment found for this project" });
    }

    res.status(200).json(teamAssignment);
  } catch (error) {
    console.error("Get team error:", error);
    res
      .status(500)
      .json({ message: "Failed to get team assignment", error: error.message });
  }
};

// Get all team assignments
export const getAllTeamAssignments = async (req, res) => {
  try {
    const teamAssignments = await AssignTeam.find()
      .populate("project", "projectName description startDate endDate budget")
      .populate("teamLead", "fullName email role position")
      .populate("teamMembers", "fullName email role position")
      .populate("students", "fullName email role")
      .sort({ createdAt: -1 });

    res.status(200).json(teamAssignments);
  } catch (error) {
    console.error("Get all team assignments error:", error);
    res.status(500).json({
      message: "Failed to get team assignments",
      error: error.message,
    });
  }
};

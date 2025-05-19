import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaSyncAlt, FaWindowMinimize, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const statusOptions = [
  "Planning",
  "In Progress",
  "Completed",
  "Pending",
  "Started"
];

const ProjectList = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [assignments, setAssignments] = useState([]);
  const [editingStatusId, setEditingStatusId] = useState(null);
  const [statusUpdate, setStatusUpdate] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        setIsLoading(true);
        const userData = JSON.parse(localStorage.getItem("user"));
        let response;
        if (userData?.role === "admin") {
          // Admin: fetch all assignments
          response = await axios.get("/api/teams/all", { withCredentials: true });
        } else {
          // Others: fetch only relevant assignments
          const userId = userData?.userid;
          response = await axios.get(`/api/teams/user-assignments?userId=${userId}`, { withCredentials: true });
        }
        setAssignments(response.data);
      } catch (err) {
        setAssignments([]);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAssignments();
    // Get user from localStorage
    const userData = JSON.parse(localStorage.getItem("user"));
    console.log("Logged in user ID:", userData?.userid);
    console.log("Full user data:", userData);
    setUser(userData);
  }, []);

  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    ).toString().padStart(2, "0")}/${date.getFullYear()}`;
  };

  // Function to refresh the project list
  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // You could reload data from your API here
      console.log("Project list refreshed");
    }, 1000);
  };

  // Function to minimize the project list
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    console.log("Project list minimized/maximized");
  };

  // Function to close the project list
  const handleClose = () => {
    setIsVisible(false);
    console.log("Project list closed");
  };

  const handleEditClick = (assignment) => {
    setEditingStatusId(assignment._id);
    setStatusUpdate(assignment.status || assignment.project?.status || "");
  };

  const handleStatusChange = async (assignmentId, newStatus) => {
    try {
      await axios.patch(`/api/teams/${assignmentId}/status`, { status: newStatus }, { withCredentials: true });
      setAssignments((prev) =>
        prev.map((a) =>
          a._id === assignmentId
            ? { ...a, status: newStatus, project: { ...a.project, status: newStatus } }
            : a
        )
      );
      setEditingStatusId(null);
    } catch (err) {
      alert("Failed to update status");
    }
  };

  if (!isVisible) {
    return null;
  }

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="project-list-container">
      <div className="project-list-header">
        <h2 className="project-list-title">Projects</h2>
        <div className="project-list-actions">
          <div
            className={isLoading ? "fa-spin" : ""}
            style={{ cursor: "pointer" }}
          >
            <FaSyncAlt
              style={{ color: "#adb5bd", fontSize: "16px" }}
              onClick={handleRefresh}
              title="Refresh"
            />
          </div>
          <FaWindowMinimize
            style={{
              color: "#adb5bd",
              fontSize: "16px",
              cursor: "pointer",
              marginTop: "-10px",
            }}
            onClick={handleMinimize}
            title="Minimize"
          />
          <FaTimes
            style={{ color: "#adb5bd", fontSize: "16px", cursor: "pointer" }}
            onClick={handleClose}
            title="Close"
          />
        </div>
      </div>

      {!isMinimized && (
        <table className="project-list-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Project Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Team Lead</th>
              <th>Team Members</th>
              <th>Students</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((a, idx) => {
              const isTeamLead = user && a.teamLead && (user._id === a.teamLead._id || user.email === a.teamLead.email);
              return (
                <tr key={a._id}>
                  <td>{idx + 1}</td>
                  <td>{a.projectName || a.project?.projectName}</td>
                  <td>{a.description || a.project?.description}</td>
                  <td>{formatDate(a.startDate || a.project?.startDate)}</td>
                  <td>{formatDate(a.dueDate || a.project?.endDate)}</td>
                  <td>
                    {editingStatusId === a._id ? (
                      <select
                        className="status-dropdown"
                        value={statusUpdate}
                        onChange={(e) => {
                          setStatusUpdate(e.target.value);
                          handleStatusChange(a._id, e.target.value);
                        }}
                        autoFocus
                      >
                        {statusOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    ) : (
                      <>
                        {a.status || a.project?.status || "N/A"}
                        {isTeamLead && (
                          <>
                            <button
                              className="status-edit-btn"
                              onClick={() => handleEditClick(a)}
                            >
                              Edit
                            </button>
                            <button
                              className="assign-work-btn"
                              style={{ marginLeft: "8px" }}
                              onClick={() => navigate("/assign-work")}
                            >
                              Assign Work
                            </button>
                          </>
                        )}
                      </>
                    )}
                  </td>
                  <td>{a.teamLead?.fullName || "N/A"}</td>
                  <td>
                    {a.teamMembers && a.teamMembers.length > 0
                      ? a.teamMembers.map((m) => m.fullName).join(", ")
                      : "N/A"}
                  </td>
                  <td>
                    {a.students && a.students.length > 0
                      ? a.students.map((s) => s.fullName).join(", ")
                      : "N/A"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProjectList;

import React, { useState } from "react";
import { FaSyncAlt, FaWindowMinimize, FaTimes } from "react-icons/fa";

const ProjectList = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data - replace with actual data from your API or state
  const projects = [
    {
      id: 1,
      name: "Velonic Admin v1",
      startDate: "01/01/2015",
      dueDate: "26/04/2015",
      status: "Released",
      assignee: "Techzaa Studio",
    },
    {
      id: 2,
      name: "Velonic Frontend v1",
      startDate: "01/01/2015",
      dueDate: "26/04/2015",
      status: "Released",
      assignee: "Techzaa Studio",
    },
    {
      id: 3,
      name: "Velonic Admin v1.1",
      startDate: "01/05/2015",
      dueDate: "10/05/2015",
      status: "Pending",
      assignee: "Techzaa Studio",
    },
    {
      id: 4,
      name: "Velonic Frontend v1.1",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Work in Progress",
      assignee: "Techzaa Studio",
    },
    {
      id: 5,
      name: "Velonic Admin v1.3",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Coming soon",
      assignee: "Techzaa Studio",
    },
    {
      id: 6,
      name: "Velonic Admin v1.3",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Coming soon",
      assignee: "Techzaa Studio",
    },
    {
      id: 7,
      name: "Velonic Admin v1.3",
      startDate: "01/01/2015",
      dueDate: "31/05/2015",
      status: "Cool",
      assignee: "Techzaa Studio",
    },
  ];

  // Function to determine which CSS class to use for status badges
  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "released":
        return "status-released";
      case "pending":
        return "status-pending";
      case "work in progress":
        return "status-progress";
      case "coming soon":
        return "status-coming-soon";
      case "cool":
        return "status-cool";
      default:
        return "";
    }
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

  if (!isVisible) {
    return null;
  }

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
              <th>Start Date</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Assign</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.startDate}</td>
                <td>{project.dueDate}</td>
                <td>
                  <span
                    className={`status-badge ${getStatusClass(project.status)}`}
                  >
                    {project.status}
                  </span>
                </td>
                <td>{project.assignee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ProjectList;

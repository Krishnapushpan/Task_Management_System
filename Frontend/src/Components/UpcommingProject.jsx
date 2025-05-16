import React, { useState } from "react";
import {
  FaSyncAlt,
  FaWindowMinimize,
  FaTimes,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const UpcomingProject = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Sample data - replace with actual data from your API or state
  const upcomingProjects = [
    {
      id: 1,
      name: "Velonic Admin v2.0",
      description:
        "Complete redesign of the admin dashboard with modern UI/UX principles and enhanced performance.",
      startDate: "15/06/2023",
      dueDate: "30/08/2023",
    },
    {
      id: 2,
      name: "Mobile App Development",
      description:
        "Create native mobile applications for iOS and Android platforms with cross-platform compatibility.",
      startDate: "01/07/2023",
      dueDate: "15/10/2023",
    },
    {
      id: 3,
      name: "API Integration",
      description:
        "Implement RESTful API services and integrate with third-party systems for seamless data exchange.",
      startDate: "10/07/2023",
      dueDate: "20/09/2023",
    },
  ];

  // Function to get initials from assignee name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  // Function to refresh the project list
  const handleRefresh = () => {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // You could reload data from your API here
      console.log("Upcoming projects refreshed");
    }, 1000);
  };

  // Function to minimize the project list
  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
    console.log("Upcoming projects minimized/maximized");
  };

  // Function to close the project list
  const handleClose = () => {
    setIsVisible(false);
    console.log("Upcoming projects closed");
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="upcoming-projects-container">
      <div className="upcoming-header">
        <h2 className="upcoming-title">Upcoming Projects</h2>
        <div className="upcoming-actions">
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
        <>
          <div className="upcoming-cards">
            {upcomingProjects.map((project) => (
              <div key={project.id} className="upcoming-card">
                <div className="upcoming-card-header">{project.name}</div>
                <div className="upcoming-card-body">
                  <div className="upcoming-card-description">
                    {project.description}
                  </div>
                  <div className="upcoming-card-details">
                    <div className="upcoming-card-detail">
                      <div className="upcoming-card-detail-label">
                        <FaCalendarAlt
                          style={{ marginRight: "8px", fontSize: "12px" }}
                        />
                        Start Date:
                      </div>
                      <div className="upcoming-card-detail-value">
                        {project.startDate}
                      </div>
                    </div>
                    <div className="upcoming-card-detail">
                      <div className="upcoming-card-detail-label">
                        <FaClock
                          style={{ marginRight: "8px", fontSize: "12px" }}
                        />
                        Due Date:
                      </div>
                      <div className="upcoming-card-detail-value">
                        {project.dueDate}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/view-more-projects" className="view-more-container">
            <div className="view-more-text">View More Projects</div>
            <FaArrowRight className="view-more-icon" />
          </Link>
        </>
      )}
    </div>
  );
};

export default UpcomingProject;

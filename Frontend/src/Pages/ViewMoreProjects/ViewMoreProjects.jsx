import React from "react";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaUserPlus,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const ViewMoreProjects = () => {
  // Additional upcoming projects that weren't shown on the dashboard
  const additionalProjects = [
    {
      id: 3,
      name: "API Integration",
      description:
        "Implement RESTful API services and integrate with third-party systems for seamless data exchange.",
      startDate: "10/07/2023",
      dueDate: "20/09/2023",
    },
    {
      id: 4,
      name: "E-commerce Platform",
      description:
        "Develop a comprehensive e-commerce solution with payment gateway integration and inventory management.",
      startDate: "05/08/2023",
      dueDate: "15/11/2023",
    },
    {
      id: 5,
      name: "Social Media Dashboard",
      description:
        "Create an analytics dashboard for tracking social media engagement and audience demographics.",
      startDate: "20/07/2023",
      dueDate: "30/09/2023",
    },
    {
      id: 6,
      name: "Learning Management System",
      description:
        "Build an educational platform for course creation, student enrollment, and progress tracking.",
      startDate: "01/09/2023",
      dueDate: "15/12/2023",
    },
    {
      id: 7,
      name: "HR Management Tool",
      description:
        "Develop a comprehensive solution for employee management, payroll processing, and performance evaluation.",
      startDate: "10/09/2023",
      dueDate: "20/12/2023",
    },
  ];

  return (
    <div className="view-more-projects-page">
      <div className="view-more-projects-header">
        <h1 className="view-more-projects-title">All Upcoming Projects</h1>
        <Link to="/admin-dashboard" className="back-button">
          <FaArrowLeft /> Back to Dashboard
        </Link>
      </div>

      <div className="view-more-projects-grid">
        {additionalProjects.map((project) => (
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
                    <FaClock style={{ marginRight: "8px", fontSize: "12px" }} />
                    Due Date:
                  </div>
                  <div className="upcoming-card-detail-value">
                    {project.dueDate}
                  </div>
                </div>
              </div>

              <Link
                to={`/assign-project/${project.id}`}
                className="assign-button"
              >
                <FaUserPlus className="assign-button-icon" />
                Assign Team
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewMoreProjects;

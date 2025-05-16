import React from "react";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaUserPlus,
  FaUsers,
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
    {
      id: 8,
      name: "Customer Relationship Management",
      description:
        "Create a robust CRM system with lead tracking, customer segmentation, and sales pipeline management.",
      startDate: "15/09/2023",
      dueDate: "25/12/2023",
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

      <div className="projects-container">
        <div className="upcoming-projects-grid">
          {additionalProjects.map((project) => (
            <div key={project.id} className="upcoming-project-card">
              <div className="upcoming-project-header">{project.name}</div>
              <div className="upcoming-project-body">
                <div className="upcoming-project-description">
                  {project.description}
                </div>
                <div className="upcoming-project-details">
                  <div className="upcoming-project-detail">
                    <div className="upcoming-project-detail-label">
                      <FaCalendarAlt />
                      Start Date:
                    </div>
                    <div className="upcoming-project-detail-value">
                      {project.startDate}
                    </div>
                  </div>
                  <div className="upcoming-project-detail">
                    <div className="upcoming-project-detail-label">
                      <FaClock />
                      Due Date:
                    </div>
                    <div className="upcoming-project-detail-value">
                      {project.dueDate}
                    </div>
                  </div>
                </div>
              </div>
              <div className="upcoming-project-footer">
                <Link
                  to={`/assign-project/${project.id}`}
                  className="assign-project-button"
                >
                  <FaUsers className="assign-project-button-icon" />
                  <span>Assign Team</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMoreProjects;
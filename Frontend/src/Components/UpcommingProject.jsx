// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faArrowRight,
//   faFilter,
//   faPlus,
//   faRefresh,
//   faUsers,
//   faCalendar,
//   faClock,
//   faWindowMinimize,
//   faTimes,
// } from "@fortawesome/free-solid-svg-icons";
// import { Link } from "react-router-dom";

// function UpcommingProject() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [isMinimized, setIsMinimized] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   const upcomingProjects = [
//     {
//       id: 1,
//       name: "E-Commerce Platform Redesign",
//       description:
//         "A complete overhaul of the existing e-commerce platform with improved UI/UX, faster checkout process, and enhanced mobile experience.",
//       startDate: "Oct 15, 2023",
//       endDate: "Jan 30, 2024",
//       budget: "$85,000",
//       priority: "High",
//       assignee: "John D.",
//       type: "UI/UX Design",
//     },
//     {
//       id: 2,
//       name: "Customer Portal Enhancement",
//       description:
//         "Adding new features to the customer portal including dashboard analytics, improved ticket system, and document management.",
//       startDate: "Nov 5, 2023",
//       endDate: "Feb 15, 2024",
//       budget: "$62,000",
//       priority: "Medium",
//       assignee: "Sarah J.",
//       type: "Frontend Development",
//     },
//     {
//       id: 3,
//       name: "Inventory Management System",
//       description:
//         "Building a modern inventory tracking system with real-time updates, barcode scanning, and analytics reporting.",
//       startDate: "Dec 1, 2023",
//       endDate: "Mar 30, 2024",
//       budget: "$95,000",
//       priority: "High",
//       assignee: "Michael T.",
//       type: "Full Stack Development",
//     },
//   ];

//   // Function to refresh the project list
//   const handleRefresh = () => {
//     setIsLoading(true);
//     // Simulate API call
//     setTimeout(() => {
//       setIsLoading(false);
//       // You could reload data from your API here
//       console.log("Upcoming projects refreshed");
//     }, 1000);
//   };

//   // Function to minimize the project list
//   const handleMinimize = () => {
//     setIsMinimized(!isMinimized);
//     console.log("Upcoming projects minimized/maximized");
//   };

//   // Function to close the project list
//   const handleClose = () => {
//     setIsVisible(false);
//     console.log("Upcoming projects closed");
//   };

//   if (!isVisible) {
//     return null;
//   }

//   return (
//     <div className="upcoming-projects-container">
//       <div className="upcoming-header">
//         <div className="upcoming-title">Upcoming Projects</div>
//         <div className="upcoming-actions">
//           <FontAwesomeIcon
//             icon={faFilter}
//             style={{ marginRight: "15px", cursor: "pointer" }}
//           />
//           <FontAwesomeIcon
//             icon={faPlus}
//             style={{ marginRight: "15px", cursor: "pointer" }}
//           />
//           <FontAwesomeIcon
//             icon={faRefresh}
//             style={{ marginRight: "15px", cursor: "pointer" }}
//             className={isLoading ? "fa-spin" : ""}
//             onClick={handleRefresh}
//           />
//           <FontAwesomeIcon
//             icon={faWindowMinimize}
//             style={{
//               marginRight: "15px",
//               cursor: "pointer",
//               marginTop: "-5px",
//             }}
//             onClick={handleMinimize}
//           />
//           <FontAwesomeIcon
//             icon={faTimes}
//             style={{ cursor: "pointer" }}
//             onClick={handleClose}
//           />
//         </div>
//       </div>

//       {!isMinimized && (
//         <>
//           <div className="upcoming-cards">
//             {upcomingProjects.map((project) => (
//               <div key={project.id} className="upcoming-card">
//                 <div className="upcoming-card-header">{project.name}</div>
//                 <div className="upcoming-card-body">
//                   <div className="upcoming-card-description">
//                     {project.description}
//                   </div>
//                   <div className="upcoming-card-details">
//                     <div className="upcoming-card-detail">
//                       <div className="upcoming-card-detail-label">
//                         Start Date
//                       </div>
//                       <div className="upcoming-card-detail-value">
//                         {project.startDate}
//                       </div>
//                     </div>
//                     <div className="upcoming-card-detail">
//                       <div className="upcoming-card-detail-label">End Date</div>
//                       <div className="upcoming-card-detail-value">
//                         {project.endDate}
//                       </div>
//                     </div>
//                     <div className="upcoming-card-detail">
//                       <div className="upcoming-card-detail-label">Budget</div>
//                       <div className="upcoming-card-detail-value">
//                         {project.budget}
//                       </div>
//                     </div>
//                     <div className="upcoming-card-detail">
//                       <div className="upcoming-card-detail-label">Type</div>
//                       <div className="upcoming-card-detail-value">
//                         {project.type}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="upcoming-card-footer">
//                   <div className="upcoming-card-assignee">
//                     <div className="assignee-avatar">
//                       {project.assignee.charAt(0)}
//                     </div>
//                     <div className="assignee-name">{project.assignee}</div>
//                   </div>
//                   <div
//                     className={`upcoming-priority priority-${project.priority.toLowerCase()}`}
//                   >
//                     {project.priority}
//                   </div>
//                 </div>
//                 <Link to="/assign-team" className="assign-button">
//                   <FontAwesomeIcon
//                     icon={faUsers}
//                     className="assign-button-icon"
//                   />
//                   <span>Assign Team</span>
//                 </Link>
//               </div>
//             ))}
//           </div>

          // <Link to="/view-more-projects" className="view-more-container">
          //   <div className="view-more-text">View More Projects</div>
          //   <FontAwesomeIcon icon={faArrowRight} className="view-more-icon" />
          // </Link>
//         </>
//       )}
//     </div>
//   );
// }

// export default UpcommingProject;  

import React, { useState } from "react";
import {
  FaSyncAlt,
  FaWindowMinimize,
  FaTimes,
  FaUserAlt,
  FaCalendarAlt,
  FaClock,
  FaArrowRight
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
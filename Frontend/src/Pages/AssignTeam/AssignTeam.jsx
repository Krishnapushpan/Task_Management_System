import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaClock,
  FaCheckCircle,
  FaUsers,
  FaUserTie,
} from "react-icons/fa";

const AssignTeam = () => {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [teamLeads, setTeamLeads] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [students, setStudents] = useState([]);
  const [selectedTeamLead, setSelectedTeamLead] = useState(null);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simulated data fetch
  useEffect(() => {
    // In a real app, you would fetch this data from your API
    // Simulating API delay
    setTimeout(() => {
      // Mock project data based on projectId
      const projectData = {
        id: projectId || 1,
        name: "API Integration Project",
        description:
          "Implement RESTful API services and integrate with third-party systems for seamless data exchange.",
        startDate: "10/07/2023",
        dueDate: "20/09/2023",
      };

      // Mock team lead data
      const teamLeadsData = [
        {
          id: 1,
          name: "John Smith",
          role: "Senior Developer",
          skills: ["Node.js", "React", "API Design"],
        },
        {
          id: 2,
          name: "Sarah Johnson",
          role: "Tech Lead",
          skills: ["System Architecture", "Project Management"],
        },
        {
          id: 3,
          name: "Michael Davis",
          role: "Backend Specialist",
          skills: ["Python", "Java", "Database Design"],
        },
      ];

      // Mock team members data
      const teamMembersData = [
        {
          id: 1,
          name: "Alex Rodriguez",
          role: "Frontend Developer",
          skills: ["React", "CSS", "JavaScript"],
        },
        {
          id: 2,
          name: "Emily Wilson",
          role: "Backend Developer",
          skills: ["Node.js", "Express", "MongoDB"],
        },
        {
          id: 3,
          name: "David Thompson",
          role: "Full Stack Developer",
          skills: ["React", "Node.js", "GraphQL"],
        },
        {
          id: 4,
          name: "Lisa Brown",
          role: "UX Designer",
          skills: ["UI/UX", "Figma", "User Research"],
        },
        {
          id: 5,
          name: "Thomas Clark",
          role: "QA Engineer",
          skills: ["Testing", "Automation", "Quality Assurance"],
        },
      ];

      // Mock students data
      const studentsData = [
        {
          id: 1,
          name: "Ryan Garcia",
          role: "Intern",
          skills: ["JavaScript", "HTML/CSS"],
        },
        {
          id: 2,
          name: "Sophia Lee",
          role: "Junior Developer",
          skills: ["React", "Node.js"],
        },
        {
          id: 3,
          name: "Kevin Patel",
          role: "Intern",
          skills: ["Python", "Data Analysis"],
        },
        {
          id: 4,
          name: "Emma Roberts",
          role: "Intern",
          skills: ["UI/UX", "Adobe XD"],
        },
        {
          id: 5,
          name: "James Wilson",
          role: "Student Developer",
          skills: ["Java", "Spring Boot"],
        },
        {
          id: 6,
          name: "Olivia Martinez",
          role: "Junior Developer",
          skills: ["MERN Stack"],
        },
      ];

      setProject(projectData);
      setTeamLeads(teamLeadsData);
      setTeamMembers(teamMembersData);
      setStudents(studentsData);
      setIsLoading(false);
    }, 1000);
  }, [projectId]);

  // Handler for selecting a team lead
  const handleTeamLeadSelect = (teamLeadId) => {
    setSelectedTeamLead(selectedTeamLead === teamLeadId ? null : teamLeadId);
  };

  // Handler for selecting team members
  const handleTeamMemberSelect = (memberId) => {
    setSelectedTeamMembers((prevSelected) => {
      if (prevSelected.includes(memberId)) {
        return prevSelected.filter((id) => id !== memberId);
      } else {
        return [...prevSelected, memberId];
      }
    });
  };

  // Handler for selecting students
  const handleStudentSelect = (studentId) => {
    setSelectedStudents((prevSelected) => {
      if (prevSelected.includes(studentId)) {
        return prevSelected.filter((id) => id !== studentId);
      } else {
        return [...prevSelected, studentId];
      }
    });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would send this data to your API
    const assignmentData = {
      projectId,
      teamLeadId: selectedTeamLead,
      teamMemberIds: selectedTeamMembers,
      studentIds: selectedStudents,
    };

    console.log("Assignment data:", assignmentData);
    // Here you would normally make an API call to save the assignment
    alert("Team assigned successfully!");
  };

  // Function to get initials from a name
  const getInitials = (name) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  if (isLoading) {
    return (
      <div className="assign-team-page">
        <div className="assign-team-content">
          <div className="assign-team-header">
            <h1 className="assign-team-title">Loading project details...</h1>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="assign-team-page">
      <div className="assign-team-content">
        <div className="assign-team-header">
          <h1 className="assign-team-title">Assign Team to Project</h1>
          <Link to="/view-more-projects" className="back-button">
            <FaArrowLeft /> Back to Projects
          </Link>
        </div>

        <div className="centered-content-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="assign-team-container">
              {/* Project header with name and description */}
              <div className="assign-team-project-header">
                <div className="assign-team-project-name">{project.name}</div>
                <div className="assign-team-project-description">
                  {project.description}
                </div>
              </div>

              {/* Project details section */}
              <div className="assign-team-project-details">
                <div className="assign-team-detail">
                  <div className="assign-team-detail-label">
                    <FaCalendarAlt style={{ marginRight: "8px" }} />
                    Start Date
                  </div>
                  <div className="assign-team-detail-value">
                    {project.startDate}
                  </div>
                </div>
                <div className="assign-team-detail">
                  <div className="assign-team-detail-label">
                    <FaCalendarAlt style={{ marginRight: "8px" }} />
                    Due Date
                  </div>
                  <div className="assign-team-detail-value">
                    {project.dueDate}
                  </div>
                </div>
              </div>

              {/* Team selection sections */}
              <div className="team-lead-section">
                <div className="assign-team-section-title">
                  <FaUserTie style={{ marginRight: "8px" }} />
                  Select Team Lead (Choose 1)
                </div>
                <ul className="team-member-list">
                  {teamLeads.map((lead) => (
                    <li
                      key={lead.id}
                      className={`team-member-item ${
                        selectedTeamLead === lead.id ? "selected" : ""
                      }`}
                      onClick={() => handleTeamLeadSelect(lead.id)}
                    >
                      <input
                        type="radio"
                        className="team-member-checkbox"
                        checked={selectedTeamLead === lead.id}
                        onChange={() => handleTeamLeadSelect(lead.id)}
                      />
                      <div className="team-member-avatar">
                        {getInitials(lead.name)}
                      </div>
                      <div className="team-member-details">
                        <div className="team-member-name">{lead.name}</div>
                        <div className="team-member-role">{lead.role}</div>
                        <div className="member-skills">
                          {lead.skills.map((skill, index) => (
                            <span key={index} className="member-skill">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="assign-team-grid">
                <div className="assign-team-section">
                  <div className="assign-team-section-title">
                    <FaUsers style={{ marginRight: "8px" }} />
                    Select Team Members
                  </div>
                  <ul className="team-member-list">
                    {teamMembers.map((member) => (
                      <li
                        key={member.id}
                        className={`team-member-item ${
                          selectedTeamMembers.includes(member.id)
                            ? "selected"
                            : ""
                        }`}
                        onClick={() => handleTeamMemberSelect(member.id)}
                      >
                        <input
                          type="checkbox"
                          className="team-member-checkbox"
                          checked={selectedTeamMembers.includes(member.id)}
                          onChange={() => handleTeamMemberSelect(member.id)}
                        />
                        <div className="team-member-avatar">
                          {getInitials(member.name)}
                        </div>
                        <div className="team-member-details">
                          <div className="team-member-name">{member.name}</div>
                          <div className="team-member-role">{member.role}</div>
                          <div className="member-skills">
                            {member.skills.map((skill, index) => (
                              <span key={index} className="member-skill">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="assign-team-section">
                  <div className="assign-team-section-title">
                    <FaUsers style={{ marginRight: "8px" }} />
                    Select Students
                  </div>
                  <ul className="team-member-list">
                    {students.map((student) => (
                      <li
                        key={student.id}
                        className={`team-member-item ${
                          selectedStudents.includes(student.id) ? "selected" : ""
                        }`}
                        onClick={() => handleStudentSelect(student.id)}
                      >
                        <input
                          type="checkbox"
                          className="team-member-checkbox"
                          checked={selectedStudents.includes(student.id)}
                          onChange={() => handleStudentSelect(student.id)}
                        />
                        <div className="team-member-avatar">
                          {getInitials(student.name)}
                        </div>
                        <div className="team-member-details">
                          <div className="team-member-name">{student.name}</div>
                          <div className="team-member-role">{student.role}</div>
                          <div className="member-skills">
                            {student.skills.map((skill, index) => (
                              <span key={index} className="member-skill">
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="submit-button-container">
                <button type="submit" className="submit-button">
                  <FaCheckCircle style={{ marginRight: "10px" }} />
                  Assign Team to Project
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AssignTeam;

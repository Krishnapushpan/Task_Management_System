import React, { useState } from "react";
import Sidebar from "../../Layouts/Sidebar";
import CountUsers from "../../Components/CountUsers";
import ProjectList from "../../Components/ProjectList";
import UpcommingProject from "../../Components/UpcommingProject";
import AddProject from "../AddProject/AddProject";
import CreateUser from "../CreateUser/CreateUser";
import ClientList from "../UserList/ClientList";
import StudentList from "../UserList/StudentList";
import TeamMember from "../UserList/TeamMember";
import Teamlead from "../UserList/Teamlead";
import PersonalWork from "../PersonalWork/PersonalWork";

const AdminDashBoard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="admin-dashboard-main">
      <Sidebar onItemClick={handleItemClick} />
      <div className="admin-dashboard-content">
        {selectedItem === "Add Client" ? (
          <CreateUser />
        ) : selectedItem === "Add Project" ? (
          <AddProject />
        ) : selectedItem === "Client List" ? (
          <ClientList />
        ) : selectedItem === "Student List" ? (
          <StudentList />
        ) : selectedItem === "Team Member List" ? (
          <TeamMember />
        ) : selectedItem === "Team Lead List" ? (
          <Teamlead />
        ) : (
          <>
            <h1
              style={{
                marginBottom: "20px",
                fontSize: "24px",
                fontWeight: "600",
                color: "#323a46",
              }}
            >
              Welcome!
            </h1>
            <CountUsers />
            <div style={{ marginTop: "20px" }}>
              <UpcommingProject />
            </div>
           
            <div style={{ marginTop: "20px" }}>
              <ProjectList />
            </div>
            <div style={{ marginTop: "20px" }}>
              <PersonalWork />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashBoard;

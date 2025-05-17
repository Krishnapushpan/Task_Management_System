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

const AdminDashBoard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: "flex" }} className="w-full">
      <Sidebar onItemClick={handleItemClick} />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f7fa",
          minHeight: "100vh",
          maxWidth: "100%",
        }} className="w-full"
      >
        <div style={{ padding: "20px" }}>
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
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap",  }}>
                <div style={{ flex: "1.5", minWidth: "60%" }}>
                  <ProjectList />
                </div>
                <div style={{ flex: "1", minWidth: "35%" }}>
                  <UpcommingProject />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;

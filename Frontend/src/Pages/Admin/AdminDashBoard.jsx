import React, { useState } from "react";
import Sidebar from "../../Layouts/Sidebar";
import CountUsers from "../../Components/CountUsers";
import ProjectList from "../../Components/ProjectList";
import UpcommingProject from "../../Components/UpcommingProject";
import CreateStudent from "../CreateUSer/CreateStudent";
import CreateTeamlead from "../CreateUSer/CreateTeamlead";
import CreateTeamMember from "../CreateUSer/CreateTeamMember";
import CreateClient from "../CreateUSer/CreateClient";

const AdminDashBoard = () => {
  const [selectedItem, setSelectedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar onItemClick={handleItemClick} />
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#f5f7fa",
          minHeight: "100vh",
        }}
      >
        <div style={{ padding: "20px" }}>
          {selectedItem === "Add Student" ? (
            <CreateStudent />
          ) : selectedItem === "Add Teamlead" ? (
            <CreateTeamlead />
          ) : selectedItem === "Add Team Member" ? (
            <CreateTeamMember />
          ) : selectedItem === "Add Client" ? (
            <CreateClient />
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
              <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
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

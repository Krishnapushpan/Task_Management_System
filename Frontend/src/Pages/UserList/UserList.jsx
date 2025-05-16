import React, { useState } from "react";
import Sidebar from "../../Layouts/Sidebar";
import ClientList from "./ClientList";
import "./List.css";

const UserList = () => {
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
          maxWidth: "100%",
        }}
      >
        {selectedItem === "Client List" ? (
          <ClientList />
        ) : (
          <div style={{ padding: "20px" }}>
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
            <p>Please select an option from the sidebar.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;

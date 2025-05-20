import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaFileAlt,
  FaUserShield,
  FaLayerGroup,
  FaBox,
  FaPuzzlePiece,
  FaRegChartBar,
  FaWpforms,
  FaTable,
  FaMapMarkerAlt,
  FaShareAlt,
  FaSignOutAlt,
  FaUserPlus,
} from "react-icons/fa";
import Userdropdown from "../Components/Dropdowns/Userdropdown";

const Sidebar = ({ onItemClick }) => {
  const navigate = useNavigate();
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      const { role } = JSON.parse(userData);
      setUserRole(role);
    }
  }, []);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem("user");
    // Clear browser history and navigate to home page
    window.history.pushState(null, "", "/");
    navigate("/", { replace: true });
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">
          {" "}
          <span className="logo-icon" />{" "}
          <span className="logo-text">Taskify</span>{" "}
        </span>
      </div>
      <div className="sidebar-section sidebar-main">Main</div>
      <ul className="sidebar-menu">
        <li
          className={onItemClick ? undefined : "active"}
          onClick={() => onItemClick && onItemClick("Dashboard")}
          style={{ cursor: "pointer" }}
        >
          <FaTachometerAlt className="sidebar-icon" />
          <span>Dashboard</span>
          {/* <span className="sidebar-badge blue">9+</span> */}
        </li>
        {userRole === "admin" && (
          <li
            onClick={() => onItemClick && onItemClick("Add Client")}
            style={{ cursor: "pointer" }}
          >
            <FaUserPlus className="sidebar-icon" />
            <span>Add User</span>
          </li>
        )}
        {(userRole === "admin" || userRole === "Client") && (
          <li
            onClick={() => onItemClick && onItemClick("Add Project")}
            style={{ cursor: "pointer" }}
          >
            <FaLayerGroup className="sidebar-icon" />
            <span>Add Project</span>
          </li>
        )}
        <li
          onClick={() => {
            setUserDropdownOpen((open) => !open);
            onItemClick && onItemClick("Client List");
          }}
          style={{ color: userDropdownOpen ? "#64c5b1" : undefined }}
        >
          <FaUserShield className="sidebar-icon" />
          <span>User List</span>
          <span
            className="sidebar-arrow"
            style={{
              transform: userDropdownOpen ? "rotate(90deg)" : "none",
              color: userDropdownOpen ? "#64c5b1" : undefined,
            }}
          >
            &#8250;
          </span>
        </li>
        <Userdropdown visible={userDropdownOpen} onItemClick={onItemClick} />
        {/* <li>
          <FaLayerGroup className="sidebar-icon" />
          <span></span>
          <span className="sidebar-badge yellow">New</span>
        </li> */}
      </ul>
      {/* Logout Button */}
      <div className="sidebar-footer">
        <li
          onClick={handleLogout}
          style={{
            cursor: "pointer",
            color: "#dc3545",
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            marginTop: "auto",
          }}
        >
          <FaSignOutAlt className="sidebar-icon" />
          <span>Logout</span>
        </li>
      </div>
    </div>
  );
};

export default Sidebar;

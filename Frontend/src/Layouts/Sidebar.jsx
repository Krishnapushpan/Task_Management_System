import React, { useState } from "react";
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
} from "react-icons/fa";
import CreateDropdown from "../Components/Dropdowns/CreateDropdown";
import Userdropdown from "../Components/Dropdowns/Userdropdown";

const Sidebar = ({ onItemClick }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <span className="sidebar-logo">
          {" "}
          <span className="logo-icon" />{" "}
          <span className="logo-text">Velonic</span>{" "}
        </span>
      </div>
      <div className="sidebar-section sidebar-main">Main</div>
      <ul className="sidebar-menu">
        <li
          className={onItemClick ? undefined : "active"}
          onClick={() => onItemClick && onItemClick("Dashboard")}
          style={{ cursor: 'pointer' }}
        >
          <FaTachometerAlt className="sidebar-icon" />
          <span>Dashboard</span>
          {/* <span className="sidebar-badge blue">9+</span> */}
        </li>
        <li
          onClick={() => setDropdownOpen((open) => !open)}
          style={{ color: dropdownOpen ? "#64c5b1" : undefined }}
        >
          <FaFileAlt className="sidebar-icon" />
          <span>Add User</span>
          <span
            className="sidebar-arrow"
            style={{
              transform: dropdownOpen ? "rotate(90deg)" : "none",
              color: dropdownOpen ? "#64c5b1" : undefined,
            }}
          >
            &#8250;
          </span>
        </li>
        <CreateDropdown visible={dropdownOpen} onItemClick={onItemClick} />
        <li
          onClick={() => setUserDropdownOpen((open) => !open)}
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
    </div>
  );
};

export default Sidebar;

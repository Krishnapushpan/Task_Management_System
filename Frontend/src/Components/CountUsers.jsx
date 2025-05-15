import React from "react";
import { FaUserTie, FaUserCog, FaUsers, FaUserGraduate } from "react-icons/fa";

const CountUsers = () => {
  // Sample data - replace with actual data from your API or state
  const stats = [
    {
      title: "CLIENTS",
      count: 8652,
      icon: <FaUserTie className="count-icon" />,
      color: "#f1556c",
    },
    {
      title: "TEAM LEADS",
      count: 9254,
      icon: <FaUserCog className="count-icon" />,
      color: "#6658dd",
    },
    {
      title: "TEAM MEMBERS",
      count: 753,
      icon: <FaUsers className="count-icon" />,
      color: "#4fc6e1",
    },
    {
      title: "STUDENTS",
      count: 63134,
      icon: <FaUserGraduate className="count-icon" />,
      color: "#1abc9c",
    },
  ];

  return (
    <div className="count-users-container">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="stat-card"
          style={{ backgroundColor: stat.color }}
        >
          <div className="stat-details">
            <div className="stat-title">{stat.title}</div>
            <div className="stat-count">{stat.count.toLocaleString()}</div>
          </div>
          <div className="stat-icon-container">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
};

export default CountUsers;

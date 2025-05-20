import React, { useState, useEffect } from "react";
import { FaTasks, FaCheckCircle, FaHourglassHalf, FaSpinner } from "react-icons/fa";
import axios from "axios";

const WorkCount = () => {
  const [counts, setCounts] = useState({
    totalAssigned: 0,
    completed: 0,
    pending: 0,
    inProgress: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        setLoading(true);
        // Replace with your actual API endpoint for work stats
        // const response = await axios.get("/api/work/counts", { withCredentials: true });
        // if (response.data && response.data.counts) {
        //   setCounts(response.data.counts);
        // }
        // For now, use placeholder values
        setCounts({
          totalAssigned: 25,
          completed: 10,
          pending: 8,
          inProgress: 7,
        });
      } catch (err) {
        setError("Failed to load work stats");
      } finally {
        setLoading(false);
      }
    };
    fetchCounts();
  }, []);

  const stats = [
    {
      title: "TOTAL ASSIGNED",
      count: counts.totalAssigned,
      icon: <FaTasks className="count-icon" />,
      color: "#6658dd",
    },
    {
      title: "COMPLETED",
      count: counts.completed,
      icon: <FaCheckCircle className="count-icon" />,
      color: "#1abc9c",
    },
    {
      title: "PENDING",
      count: counts.pending,
      icon: <FaHourglassHalf className="count-icon" />,
      color: "#f1556c",
    },
    {
      title: "IN PROGRESS",
      count: counts.inProgress,
      icon: <FaSpinner className="count-icon" />,
      color: "#4fc6e1",
    },
  ];

  if (loading) {
    return (
      <div className="count-users-container loading">
        Loading work statistics...
      </div>
    );
  }

  if (error) {
    return <div className="count-users-container error">{error}</div>;
  }

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

export default WorkCount;

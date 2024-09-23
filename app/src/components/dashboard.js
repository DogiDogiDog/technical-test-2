import React, { useEffect, useState } from "react";
import api from "../services/api";
import Loader from "./loader";

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({
    totalUsers: 0,
    totalProjects: 0,
    totalActivities: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [usersRes, projectsRes, activitiesRes] = await Promise.all([api.get("/user"), api.get("/project"), api.get("/activity")]);

        setData({
          totalUsers: usersRes.data.length,
          totalProjects: projectsRes.data.length,
          totalActivities: activitiesRes.data.length,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="dashboard">
      <div className="stat">
        <h3>Total Users</h3>
        <p>{data.totalUsers}</p>
      </div>
      <div className="stat">
        <h3>Total Projects</h3>
        <p>{data.totalProjects}</p>
      </div>
      <div className="stat">
        <h3>Total Activities</h3>
        <p>{data.totalActivities}</p>
      </div>
    </div>
  );
};

export default Dashboard;

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);

  return <div>{isLoggedIn && <Navbar />}</div>;
};

export default Dashboard;

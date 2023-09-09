import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

import Signin from "./Signin";
import Navbar from "./Navbar";

const Root = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // Check authentication status when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token exists
  }, []);
  const customSession = () => {
    const token = localStorage.getItem("token");
    if (!token === "") {
      return true;
    } else {
      return false;
    }
  };

  return (
    <main>
      <div className="main">
        <div className="gradient"></div>
      </div>
      <div className="app">
        {isLoggedIn && <Navbar />}
        <Outlet />
      </div>
    </main>
  );
};

export default Root;

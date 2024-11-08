import React from "react";
import { logo } from "../assets/image";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="nav-container">
      <img src={logo} alt="logo" className="logo" onClick={() => handleNavigation("/")} />
      
      <div className="desktop-menu">
        <span
          className={`menu-name ${location.pathname === "/" ? "active" : ""}`}
          onClick={() => handleNavigation("/")}
        >
          Home
        </span>
        <span
          className={`menu-name ${location.pathname === "/about" ? "active" : ""}`}
          onClick={() => handleNavigation("/about")}
        >
          About
        </span>
        <span
          className={`menu-name ${location.pathname === "/service" ? "active" : ""}`}
          onClick={() => handleNavigation("/service")}
        >
          Service
        </span>
        <span
          className={`menu-name ${location.pathname === "/demo" ? "active" : ""}`}
          onClick={() => handleNavigation("/demo")}
        >
          Demo
        </span>
        <span
          className={`menu-name ${location.pathname === "/event" ? "active" : ""}`}
          onClick={() => handleNavigation("/event")}
        >
          Event
        </span>
      </div>
    </div>
  );
};

export default Navbar;

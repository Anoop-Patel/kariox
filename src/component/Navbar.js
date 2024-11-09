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
  <div className="item">
    <span
      className={`menu-name ${location.pathname === "/" ? "active" : ""}`}
      onClick={() => handleNavigation("/")}
    >
      Home
    </span>
  </div>
  <div className="item">
    <span
      className={`menu-name ${location.pathname === "/about" ? "active" : ""}`}
      onClick={() => handleNavigation("/about")}
    >
      About
    </span>
  </div>
  <div className="item">
    <span
      className={`menu-name ${location.pathname === "/service" ? "active" : ""}`}
      onClick={() => handleNavigation("/service")}
    >
      Service
    </span>
  </div>
  <div className="item">
    <span
      className={`menu-name ${location.pathname === "/demo" ? "active" : ""}`}
      onClick={() => handleNavigation("/demo")}
    >
      Demo
    </span>
  </div>
  <div className="item">
    <span
      className={`menu-name ${location.pathname === "/event" ? "active" : ""}`}
      onClick={() => handleNavigation("/event")}
    >
      Event
    </span>
  </div>
     </div>

    </div>
  );
};

export default Navbar;

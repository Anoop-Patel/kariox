import React, { useState } from "react";
import { logo } from "../assets/image";
import { useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaUserCircle, FaShoppingCart } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); 
  };

  return (
    <div className="nav-container">
      <img
        src={logo}
        alt="logo"
        className="logo"
        onClick={() => handleNavigation("/")}
      />

      <div className="desktop-menu">
        <div className="item">
          <span
            className={`menu-name ${location.pathname === "/" ? "active" : ""}`}
            onClick={() => handleNavigation("/")}
          >
            HOME
          </span>
        </div>
        <div className="item">
          <span
            className={`menu-name ${location.pathname === "/about" ? "active" : ""}`}
            onClick={() => handleNavigation("/about")}
          >
            ABOUT
          </span>
        </div>
        <div className="item">
          <span
            className={`menu-name ${location.pathname === "/service" ? "active" : ""}`}
            onClick={() => handleNavigation("/service")}
          >
            SERVICE
          </span>
        </div>
        <div className="item">
          <span
            className={`menu-name ${location.pathname === "/demo" ? "active" : ""}`}
            onClick={() => handleNavigation("/demo")}
          >
            DEMO
          </span>
        </div>
        <div className="item">
          <span
            className={`menu-name ${location.pathname === "/event" ? "active" : ""}`}
            onClick={() => handleNavigation("/event")}
          >
            EVENTS
          </span>
        </div>
      </div>

      <div className="mobile-menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <FaBars size={24} />
      </div>

      {isMenuOpen && (
        <div className="mobile-menu-box active">
          <div className="menu-header">
            <h2>KARIOX </h2>
          </div>
          <nav className="menu-content">
            <ul>
              <li onClick={() => handleNavigation("/")}>HOME</li>
              <li onClick={() => handleNavigation("/about")}>ABOUT</li>
              <li onClick={() => handleNavigation("/service")}>SERVICE</li>
              <li onClick={() => handleNavigation("/Demo")}>DEMO</li>
              <li onClick={() => handleNavigation("/event")}>EVENTS</li>
            
            </ul>
          </nav>
          <footer className="menu-footer">
            <FaUserCircle size={24} />
            <FaShoppingCart size={24} onClick={() => handleNavigation("/Event")} />
          </footer>
        </div>
      )}
    </div>
  );
};

export default Navbar;

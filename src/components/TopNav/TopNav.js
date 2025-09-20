import React from "react";
import { useNavigate, Link } from "react-router-dom";
import "./TopNav.css";

const TopNav = ({ toggleNav }) => {
  // const navigate = useNavigate();

  return (
    <nav className="top-nav">
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>
      <div className="burger-menu" onClick={toggleNav}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
};

export default TopNav;

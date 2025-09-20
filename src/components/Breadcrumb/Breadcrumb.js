import React from "react";
import { Link } from "react-router-dom";
import { FaHome, FaAngleRight } from "react-icons/fa";
import "./Breadcrumb.css";

const Breadcrumb = ({ path = [] }) => {
  return (
    <nav className="breadcrumb">
      {path.map((crumb, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <FaAngleRight className="breadcrumb-separator" />}
          {index === 0 && <FaHome className="breadcrumb-icon" />}
          {index === path.length - 1 ? (
            <span className="breadcrumb-item active">{crumb.label}</span>
          ) : (
            <Link to={crumb.url} className="breadcrumb-link">
              {crumb.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;

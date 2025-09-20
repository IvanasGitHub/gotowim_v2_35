import React from "react";
import { useNavigate } from "react-router-dom";
import PopularCategories from "../PopularCategories/PopularCategories";
import "./Header.css";

const Header = ({ onSearch }) => {
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    const query = event.target.value;
    onSearch(query);
    navigate("/search");
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={handleLogoClick}>
          <img
            src="https://sdmntpritalynorth.oaiusercontent.com/files/00000000-4cf4-6246-a9db-e8349a9b72c0/raw?se=2025-04-13T17%3A38%3A18Z&sp=r&sv=2024-08-04&sr=b&scid=f659533e-8182-562d-a4c6-2eddfbf2fd14&skoid=54ae6e2b-352e-4235-bc96-afa2512cc978&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-04-13T15%3A21%3A49Z&ske=2025-04-14T15%3A21%3A49Z&sks=b&skv=2024-08-04&sig=u6/XUVuxZbP2Z%2BWygqtJflHGJA2Ai9C%2BKOjeKuLJ%2BGA%3D"
            alt="Logo"
          />
        </div>
        <h1 className="app-title">Recipe App</h1>
        <p>Discover and share your favorite recipes!</p>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search for recipes..."
            onChange={handleSearchChange}
            className="search-input"
          />
        </div>
      </div>
      <div className="slider-container">
        <h2 className="categories-title">Popular Categories</h2>
        <PopularCategories />
      </div>
    </header>
  );
};

export default Header;

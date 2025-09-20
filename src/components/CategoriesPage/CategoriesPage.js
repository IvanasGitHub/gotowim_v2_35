// src/components/CategoriesPage/CategoriesPage.js
import React from "react";
import { Link } from "react-router-dom";
import categories from "../../data/categories";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "../CategoriesPage/CategoriesPage.css";

const CategoriesPage = () => {
  const breadcrumbPath = [
    { label: "Home", url: "/" },
    { label: "Categories", url: "/categories" },
  ];

  return (
    <div>
      <Breadcrumb path={breadcrumbPath} />
      <h1>Categories</h1>
      <div className="category-list">
        {categories.map((category) => (
          <Link key={category.name} to={`/category/${category.name}`}>
            <div className="category-card">
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-name">{category.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;

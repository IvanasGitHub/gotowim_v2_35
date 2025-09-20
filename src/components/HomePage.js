import React from "react";
import { Link } from "react-router-dom";
import categories from "../data/categories";
import Breadcrumb from "./Breadcrumb/Breadcrumb";

const HomePage = () => {
  const breadcrumbPath = [{ label: "Home", url: "/" }];

  return (
    <div>
      <Breadcrumb path={breadcrumbPath} />
      <h1>Home</h1>
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

export default HomePage;

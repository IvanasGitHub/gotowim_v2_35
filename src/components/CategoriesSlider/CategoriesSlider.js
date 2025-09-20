import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import categories from "../../data/categories";
import "./CategoriesSlider.css";

const CategoriesSlider = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="slider-container">
      <h2 className="categories-title">Popular Categories</h2>
      <div className="categories-slider-container">
        <button className="scroll-button left" onClick={scrollLeft}>
          ‹
        </button>
        <div className="categories-slider" ref={scrollRef}>
          {categories.map((category) => (
            <div
              key={category.name}
              className="category-card"
              onClick={() => handleCategoryClick(`/category/${category.name}`)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />
              <div className="category-name">{category.name}</div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>
          ›
        </button>
      </div>
    </div>
  );
};

export default CategoriesSlider;

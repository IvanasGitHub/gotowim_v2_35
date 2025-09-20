import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./PopularCategories.css";

const categories = [
  { name: "Завтраки", icon: "🍳", path: "/category/Breakfasts" },
  { name: "Обеды", icon: "🍲", path: "/category/Mexican" },
  { name: "Ужины", icon: "🍝", path: "/category/Dinners" },
  { name: "Десерты", icon: "🍰", path: "/category/Desserts" },
  { name: "Напитки", icon: "🍹", path: "/category/Drinks" },
  { name: "Завтраки", icon: "🍳", path: "/category/Breakfasts" },
  { name: "Обеды", icon: "🍲", path: "/category/Lunches" },
  { name: "Ужины", icon: "🍝", path: "/category/Dinners" },
  { name: "Десерты", icon: "🍰", path: "/category/Desserts" },
  { name: "Напитки", icon: "🍹", path: "/category/Drinks" },
  // Добавьте больше категорий, если нужно
];

const PopularCategories = () => {
  const navigate = useNavigate();
  const scrollRef = useRef(null);

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="popular-categories-container">
      <button className="scroll-button left" onClick={scrollLeft}>
        ‹
      </button>
      <div className="categories-scroll" ref={scrollRef}>
        {categories.map((category) => (
          <button
            key={category.name}
            className="category-button"
            onClick={() => handleCategoryClick(category.path)}
          >
            <span className="icon">{category.icon}</span>
            {category.name}
          </button>
        ))}
      </div>
      <button className="scroll-button right" onClick={scrollRight}>
        ›
      </button>
    </div>
  );
};

export default PopularCategories;

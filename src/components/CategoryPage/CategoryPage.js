import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import recipes from "../../data/recipes";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import "./CategoryPage.css";
import RecipeCard from "../RecipeCard/RecipeCard";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 12;

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.categories.includes(categoryName)
  );

  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = filteredRecipes.slice(
    indexOfFirstRecipe,
    indexOfLastRecipe
  );

  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage);

  const handlePageChange = (direction) => {
    setCurrentPage((prevPage) => {
      if (direction === "next") {
        return Math.min(prevPage + 1, totalPages);
      } else if (direction === "prev") {
        return Math.max(prevPage - 1, 1);
      }
      return prevPage;
    });
  };

  const breadcrumbPath = [
    { label: "Home", url: "/" },
    { label: "Categories", url: "/categories" },
    { label: categoryName, url: `/category/${categoryName}` },
  ];

  useEffect(() => {
    localStorage.setItem("categoryName", categoryName);
  }, [categoryName]);

  return (
    <div>
      <Breadcrumb path={breadcrumbPath} />
      <h1>{categoryName}</h1>
      {filteredRecipes.length === 0 ? (
        <p>No recipes found for this category.</p>
      ) : (
        <>
          <div className="pagination">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
            >
              &laquo; Previous
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                className={currentPage === number + 1 ? "active" : ""}
                onClick={() => setCurrentPage(number + 1)}
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
            >
              Next &raquo;
            </button>
          </div>
          <div className="recipe-grid">
            {currentRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
          <div className="pagination">
            <button
              onClick={() => handlePageChange("prev")}
              disabled={currentPage === 1}
            >
              &laquo; Previous
            </button>
            {[...Array(totalPages).keys()].map((number) => (
              <button
                key={number + 1}
                className={currentPage === number + 1 ? "active" : ""}
                onClick={() => setCurrentPage(number + 1)}
              >
                {number + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange("next")}
              disabled={currentPage === totalPages}
            >
              Next &raquo;
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CategoryPage;

import React from "react";
import RecipeCard from "../RecipeCard/RecipeCard";

const RecipeGrid = ({ recipes }) => {
  return (
    <div>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;

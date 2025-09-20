import React from "react";
import RecipeGrid from "RecipeGrid";
import recipes from "../data/recipes";

const SearchPage = ({ searchTerm }) => {
  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.some((ingredient) =>
        ingredient.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );

  return (
    <div>
      <RecipeGrid recipes={filteredRecipes} />
    </div>
  );
};

export default SearchPage;

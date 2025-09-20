import React from "react";
import RecipeGrid from "./RecipeGrid";

const SearchResultsPage = ({ recipes }) => {
  return (
    <div>
      <h1>Search Results</h1>
      <RecipeGrid recipes={recipes} />
    </div>
  );
};

export default SearchResultsPage;

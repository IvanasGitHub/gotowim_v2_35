import React from "react";
import { Link } from "react-router-dom";
import "./RecipeCard.css";

const RecipeCard = ({ recipe }) => {
  const firstFourIngredients = recipe.ingredients.slice(0, 4);

  return (
    <div className="recipe-card">
      <Link to={`/recipe/${recipe.id}`} className="recipe-link">
        <div className="recipe-header">
          <div className="rating">
            <i className="fas fa-star"></i>
            <span className="rating-number">{recipe.rating}</span>
          </div>
          <div className="like-button">
            <i className="fas fa-heart"></i>
            <span className="likes-number">{recipe.likes}</span>
          </div>
        </div>
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />
        <div className="recipe-content">
          <h2 className="recipe-title">{recipe.title}</h2>
          <p className="recipe-description">{recipe.description}</p>
          <div className="recipe-info">
            <div className="recipe-time">
              <i className="fas fa-clock"></i>
              <span>{recipe.prep_time}</span>
            </div>
            <div className="recipe-difficulty">
              <i className="fas fa-flag"></i>
              <span>{recipe.difficulty}</span>
            </div>
          </div>
          <div className="recipe-ingredients">
            {firstFourIngredients.map((ingredient, index) => (
              <div key={index} className="ingredient-item">
                <span className="ingredient-quantity">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="ingredient-name">{ingredient.name}</span>
              </div>
            ))}
          </div>
        </div>
      </Link>
      <div className="recipe-footer">
        <div className="recipe-categories">
          {recipe.categories.map((category, index) => (
            <span key={index} className="recipe-category">
              {category}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

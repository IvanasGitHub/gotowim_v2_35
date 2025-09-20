import React, { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import recipes from "../../data/recipes";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faPepperHot,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./RecipePage.css";

const RecipePage = () => {
  const { id } = useParams();
  const location = useLocation();
  const recipe = recipes.find((r) => r.id === parseInt(id));
  const categoryName =
    location.state?.categoryName ||
    localStorage.getItem("categoryName") ||
    "Unknown";

  const [completedIngredients, setCompletedIngredients] = useState([]);
  const [completedSteps, setCompletedSteps] = useState([]);
  const [servings, setServings] = useState(4);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  const breadcrumbPath = [
    { label: "Home", url: "/" },
    { label: "Categories", url: "/categories" },
    { label: categoryName, url: `/category/${categoryName}` },
    { label: recipe.title, url: `/recipe/${recipe.id}` },
  ];

  const handleIngredientCheckboxChange = (index) => {
    setCompletedIngredients((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleStepCheckboxChange = (index) => {
    setCompletedSteps((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleIncreaseServings = () => setServings((prev) => prev + 1);
  const handleDecreaseServings = () =>
    setServings((prev) => (prev > 1 ? prev - 1 : prev));

  const calculateIngredientQuantity = (ingredient) => {
    const originalQuantity = ingredient.quantity;
    const originalServings = 4;
    return (originalQuantity / originalServings) * servings;
  };

  const renderProgressBar = (value, color) => (
    <div className="progress-bar">
      <div
        className="progress-fill"
        style={{
          width: `${value}%`,
          backgroundColor: color,
        }}
      ></div>
    </div>
  );

  return (
    <div className="recipe-page">
      <Breadcrumb path={breadcrumbPath} />
      <h1 className="recipe-title">{recipe.title}</h1>

      <div className="recipe-main">
        <img src={recipe.image} alt={recipe.title} className="recipe-image" />

        <div className="nutrition-info">
          <h2 className="nutrition-title">Nutrition Information</h2>

          <div className="nutrition-grid">
            <div className="nutrition-item">
              🥩 Protein: {recipe.nutritional_info.protein}g
              {renderProgressBar(recipe.nutritional_info.protein, "#f97316")}
            </div>
            <div className="nutrition-item">
              🍞 Carbs: {recipe.nutritional_info.carbohydrates}g
              {renderProgressBar(
                recipe.nutritional_info.carbohydrates,
                "#3b82f6"
              )}
            </div>
            <div className="nutrition-item">
              🥑 Fats: {recipe.nutritional_info.fat}g
              {renderProgressBar(recipe.nutritional_info.fat, "#22c55e")}
            </div>
            <div className="nutrition-item">
              🔥 Calories: {recipe.nutritional_info.calories} kcal
            </div>
            <div className="nutrition-item">
              <FontAwesomeIcon icon={faUtensils} /> Difficulty:{" "}
              {recipe.difficulty}
            </div>
            <div className="nutrition-item">
              <FontAwesomeIcon icon={faPepperHot} /> Spiciness:{" "}
              {recipe.spiciness}
            </div>
            <div className="nutrition-item">
              Servings:
              <div className="servings-control">
                <button
                  onClick={handleDecreaseServings}
                  className="servings-button"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </button>
                <span className="servings-value">{servings}</span>
                <button
                  onClick={handleIncreaseServings}
                  className="servings-button"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="recipe-details">
        <div className="ingredients-container">
          <h2 className="ingredients-title">Ingredients</h2>
          <table className="ingredients-table">
            <thead>
              <tr>
                <th></th>
                <th>Ingredient</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {recipe.ingredients.map((ingredient, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="checkbox"
                      checked={completedIngredients.includes(index)}
                      onChange={() => handleIngredientCheckboxChange(index)}
                    />
                  </td>
                  <td
                    className={
                      completedIngredients.includes(index) ? "completed" : ""
                    }
                  >
                    {ingredient.name}
                  </td>
                  <td
                    className={
                      completedIngredients.includes(index) ? "completed" : ""
                    }
                  >
                    {calculateIngredientQuantity(ingredient).toFixed(2)}{" "}
                    {ingredient.unit}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="instructions-container">
          <h2 className="instructions-title">Instructions</h2>
          {recipe.instructions.split("\n").map((step, index) => (
            <div key={index} className="instruction-item">
              <div className="instruction-header">
                <input
                  type="checkbox"
                  checked={completedSteps.includes(index)}
                  onChange={() => handleStepCheckboxChange(index)}
                />
                <span className="instruction-step">Step {index + 1}</span>
              </div>
              <div className="instruction-content">
                <img
                  src="https://via.placeholder.com/140"
                  alt={`Step ${index + 1}`}
                  className="instruction-image"
                />
                <p
                  className={`instruction-text ${
                    completedSteps.includes(index) ? "completed" : ""
                  }`}
                >
                  {step}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipePage;

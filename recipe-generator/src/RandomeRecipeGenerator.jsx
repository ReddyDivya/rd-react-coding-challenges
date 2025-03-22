import React, { useState } from "react";
import Recipe from "./Recipe";

const RandomRecipeGenerator = () => {
  // State to store the fetched recipes
  const [recipes, setRecipes] = useState([]);
  // State to track the selected recipe for details display
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  // Function to fetch recipes from the API
  const handleGenerateRecipe = async () => {
    try {
      const response = await fetch("https://dummyjson.com/recipes"); // Fetch data from API
      const data = await response.json(); // Convert response to JSON
      setRecipes(data.recipes); // Update state with fetched recipes
    } catch (error) {
      console.error("Error fetching recipes:", error); // Log any errors
    }
  }; // handleGenerateRecipe

  return (
    <div className="app-container">
      <h2>Random Recipe Generator</h2>

      {/* Button to fetch and display recipes */}
      <button onClick={handleGenerateRecipe} className="generate-button">
        Generate Recipes
      </button>

      {/* Display recipes in a grid */}
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div className="recipe-container" key={recipe.id}>
            {/* Recipe Image */}
            <img
              src={recipe.image}
              width="150"
              height="150"
              alt={recipe.name}
            />
            {/* Recipe Name */}
            <h4>{recipe.name}</h4>
            {/* Rating */}
            <span className="rating">{recipe.rating}⭐</span>
            {/* Meal Type */}
            <span className="meal-type">{recipe.mealType}</span>

            {/* Button to show full recipe details */}
            <button
              onClick={() => setSelectedRecipe(recipe)}
              className="generate-button"
            >
              Get Recipe
            </button>

            {/* Show Recipe component only if this recipe is selected */}
            {selectedRecipe?.id === recipe?.id && <Recipe recipe={recipe} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomRecipeGenerator;

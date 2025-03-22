import React from "react";

// Recipe component that takes a 'recipe' object as a prop
const Recipe = ({ recipe }) => {
  return (
    <div>
      {/* Display Ingredients Section */}
      <h5>Ingredients:</h5>
      <ul>
        {/* Check if ingredients exist, then map over them to display as a list */}
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li> // Assign a unique key to each list item
          ))}
      </ul>

      {/* Display Instructions Section */}
      <h5>Instructions:</h5>
      <ul>
        {/* Check if instructions exist, then map over them to display as a list */}
        {recipe.instructions &&
          recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li> // Assign a unique key to each list item
          ))}
      </ul>
    </div>
  );
};

export default Recipe; // Exporting the Recipe component for use in other files

import { useState } from 'react';
import axios from 'axios';

const RecipeGenerator = () => {
  // State to store the fetched recipe data
  const [recipe, setRecipe] = useState(null);
  
  // State to manage the loading state
  const [loading, setLoading] = useState(false);
  
  // State to manage any error during the fetch process
  const [error, setError] = useState(null);

  // Function to fetch a random recipe from the API
  const fetchRecipe = async () => {
    setLoading(true); // Set loading to true before starting the fetch process
    setError(null); // Reset any previous error

    try {
      // Fetch random recipe data from TheMealDB API
      const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
      const data = response.data.meals[0]; // Get the first meal from the response
      setRecipe(data); // Update the recipe state with the fetched data
    } catch (error) {
      setError('Failed to fetch recipe. Please try again.'); // Set error message in case of failure
    }

    setLoading(false); // Set loading to false after the fetch process is complete
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg mt-12">
      {/* Title of the component */}
      <h1 className="text-2xl font-semibold text-blue-600 mb-4">Random Recipe Generator</h1>
      
      {/* Button to fetch a new random recipe */}
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
        onClick={fetchRecipe}
      >
        Get Random Recipe
      </button>

      {/* Show loading message while fetching */}
      {loading && <p className="mt-4">Loading...</p>}

      {/* Show error message if fetch fails */}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {/* Display the fetched recipe */}
      {recipe && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">{recipe.strMeal}</h2>
          
          {/* Display recipe image */}
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full h-auto rounded-lg mt-4"
          />

          {/* Display recipe category */}
          <p className="mt-4">
            <strong>Category:</strong> {recipe.strCategory}
          </p>

          {/* Display recipe area */}
          <p>
            <strong>Area:</strong> {recipe.strArea}
          </p>

          {/* Display ingredients list */}
          <h3 className="text-lg font-semibold mt-4">Ingredients:</h3>
          <ul className="list-disc list-inside">
            {Array.from({ length: 20 }, (_, i) => i + 1)
              .map(i => {
                const ingredient = recipe[`strIngredient${i}`];
                const measure = recipe[`strMeasure${i}`];
                // Display only non-empty ingredients
                return ingredient ? (
                  <li key={i}>
                    {ingredient} - {measure}
                  </li>
                ) : null;
              })}
          </ul>

          {/* Display recipe instructions */}
          <h3 className="text-lg font-semibold mt-4">Instructions:</h3>
          <p className="mt-2">{recipe.strInstructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeGenerator;

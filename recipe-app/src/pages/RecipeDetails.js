import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/RecipeDetails.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        setRecipe(response.data.meals[0]);
      } catch (error) {
        console.error("Error fetching recipe details:", error);
      }
    };

    fetchRecipeDetails();
  }, [id]);

  if (!recipe) {
    return <p>Loading recipe details...</p>;
  }

  return (
    <div className="recipe-details">
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p><strong>Category:</strong> {recipe.strCategory}</p>
      <p><strong>Cuisine:</strong> {recipe.strArea}</p>
      <p><strong>Instructions:</strong></p>
      <p>{recipe.strInstructions}</p>
    </div>
  );
};

export default RecipeDetails;

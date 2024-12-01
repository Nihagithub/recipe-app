import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1/";

// Fetch recipes by ingredient
export const fetchRecipesByIngredient = async (ingredient) => {
  try {
    const response = await axios.get(`${BASE_URL}filter.php?i=${ingredient.trim()}`);
    const meals = response.data.meals || []; // Ensure no null values
    return meals.slice(0, 36); // Limit to 36 results
  } catch (error) {
    console.error("Error fetching recipes by ingredient:", error);
    return [];
  }
};

// Fetch recipes by name
export const fetchRecipesByName = async (name) => {
  try {
    const response = await axios.get(`${BASE_URL}search.php?s=${name.trim()}`);
    const meals = response.data.meals || []; // Ensure no null values
    return meals.slice(0, 15); // Limit to 15 results
  } catch (error) {
    console.error("Error fetching recipes by name:", error);
    return [];
  }
};

// Fetch random recipe
export const fetchRandomRecipe = async () => {
  try {
    const response = await axios.get(`${BASE_URL}random.php`);
    return response.data.meals ? response.data.meals[0] : null; // Return a single random meal
  } catch (error) {
    console.error("Error fetching random recipe:", error);
    return null;
  }
};

// Fetch meal details by ID
export const fetchRecipeDetailsById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}lookup.php?i=${id}`);
    return response.data.meals ? response.data.meals[0] : null; // Return the meal details
  } catch (error) {
    console.error("Error fetching recipe details:", error);
    return null;
  }
};

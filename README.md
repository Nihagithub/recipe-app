# Recipe Finder App

This is a Recipe Finder web application built using **React**. The app allows users to search for recipes based on ingredients, view recipe details, and save their favorite recipes to a wishlist.

## Features
- **Search for recipes** by entering ingredients.
- **View recipe details** including ingredients and instructions.
- **Add and remove recipes** from the wishlist.
- **Responsive design** that works on both desktop and mobile screens.

## Technologies Used
- **React.js** - JavaScript library for building user interfaces.
- **Axios** - HTTP client to fetch data from APIs.
- **CSS** - For styling the components.
- **React Router** - For handling navigation between pages (Home and Wishlist).
  
## API Used
- **TheMealDB API**: Provides a collection of meal recipes based on ingredients. No API key is required to access it.
  - [MealDB API](https://www.themealdb.com/api/json/v1/1/)

## App Structure

```
recipe-app/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── Filters.js
│   │   ├── RecipeCard.js
│   │   ├── RecipeList.js
│   │   ├── SearchBar.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── RecipeDetails.js
│   │   ├── Wishlist.js
│   ├── utils/
│   │   ├── api.js
│   ├── styles/
│   │   ├── Filters.css
│   │   ├── RecipeCard.css
│   │   ├── RecipeList.css
│   │   ├── SearchBar.css
│   │   ├── Home.css
│   │   ├── Wishlist.css
│   ├── App.js
│   ├── index.js
├── package.json

```

## How to Run the App Locally

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/Nihagithub/recipe-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd recipe-app
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   The app will open in your browser at `http://localhost:3000`.

## How to Contribute

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes and commit them (`git commit -am 'Add your feature'`).
4. Push to your forked repository (`git push origin feature/your-feature`).
5. Create a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements
- [TheMealDB API](https://www.themealdb.com/api/json/v1/1/) for providing the recipe data.
- [React.js](https://reactjs.org/) for making it easier to build interactive UIs.
- [Axios](https://axios-http.com/) for handling HTTP requests.
```

#thank you

import React, { useState } from 'react';
import './Lorraine.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file

// Sample recipe data for Quiche Lorraine
const recipe = {
  title: "Quiche Lorraine",
  subtitle: "A classic French dish perfect for brunch or dinner.",
  img: "https://images.pexels.com/photos/288264/pexels-photo-288264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", // Updated image
  tags: ["French", "Brunch", "Savory"],
  prepTime: "20 min",
  cookTime: "30 min",
  totalTime: "50 min",
  servings: 6,
  ingredients: [
    { amount: "1", unit: "cup", name: "heavy cream" },
    { amount: "1", unit: "cup", name: "milk" },
    { amount: "4", unit: "large", name: "eggs" },
    { amount: "1/2", unit: "cup", name: "grated Gruyère cheese" },
    { amount: "1/2", unit: "cup", name: "chopped cooked bacon" },
    { amount: "1", unit: "tbsp", name: "chopped onion" },
    { amount: "1", unit: "tbsp", name: "butter" },
    { amount: "1/4", unit: "tsp", name: "nutmeg" },
    { amount: "", unit: "", name: "Salt and pepper to taste" },
    { amount: "1", unit: "", name: "pre-made pie crust" }
  ],
  steps: [
    "Preheat your oven to 375°F (190°C).",
    "In a skillet, sauté the onion in butter until soft. Add the cooked bacon and set aside.",
    "In a bowl, whisk together the heavy cream, milk, eggs, and nutmeg. Season with salt and pepper.",
    "Place the pie crust in a pie dish. Spread the onion and bacon mixture evenly over the crust.",
    "Sprinkle the Gruyère cheese on top of the bacon mixture.",
    "Pour the egg mixture over the filling. Bake for 30 minutes or until the quiche is set and lightly golden.",
    "Let the quiche cool slightly before slicing and serving."
  ]
};

const Recipe = () => {
  const [checkedIngredients, setCheckedIngredients] = useState({});
  const [liked, setLiked] = useState(false); // State for like button

  const handleCheckboxChange = (index) => {
    setCheckedIngredients(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const handleLikeClick = () => {
    setLiked(prevLiked => !prevLiked);
  };

  return (
    <section className="qsection">
      <div className="container">
        <div className="columns is-centered is-mobile">
          <div className="column is-10-tablet is-7-widescreen">
            <article className="recipe box">
              {recipe.img && (
                <div className="recipe__img">
                  <img src={recipe.img} alt={recipe.title} />
                </div>
              )}
              <header>
                <div className="header-content">
                  <div className="header-left">
                    {recipe.tags && (
                      <ul className="tags">
                        {recipe.tags.map(tag => (
                          <li key={tag} className="tag is-uppercase">{tag}</li>
                        ))}
                      </ul>
                    )}
                    <h2 className="title">{recipe.title}</h2>
                    {recipe.subtitle && (
                      <p className="lead">{recipe.subtitle}</p>
                    )}
                  </div>
                  <div className="header-right">
                    <div className="heading">Prep Time: {recipe.prepTime}</div>
                    <div className="heading">Cook Time: {recipe.cookTime}</div>
                    <div className="heading has-text-weight-bold">Total Time: {recipe.totalTime}</div>
                    <button className="like-button" onClick={handleLikeClick}>
                      <img src={likeIcon} alt="Like" className={liked ? 'liked' : ''} />
                    </button>
                  </div>
                </div>
              </header>
              <div className="recipe__content">
                <div className="level">
                  <div className="level-left">
                    <h2 className="is-size-4">Ingredients:</h2>
                  </div>
                  <div className="level-right">
                    <div className="level-item">
                      <div className="heading label is-small">Servings: {recipe.servings}</div>
                    </div>
                  </div>
                </div>
                <ul className="recipe__ingredients">
                  {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>
                      <label>
                        <input
                          type="checkbox"
                          checked={!!checkedIngredients[index]}
                          onChange={() => handleCheckboxChange(index)}
                        />
                        {ingredient.amount && (
                          <>
                            <span>{ingredient.amount}</span>&nbsp;
                          </>
                        )}
                        {ingredient.unit && (
                          <>
                            <span>{ingredient.unit}</span>&nbsp;
                          </>
                        )}
                        <span>{ingredient.name}</span>
                        {ingredient.optional && (
                          <span className="is-italic"> (optional)</span>
                        )}
                      </label>
                    </li>
                  ))}
                </ul>
                <br />
                <div className="recipe__directions">
                  <h2 className="directions-title">Directions:</h2>
                  <ul className="directions-list">
                    {recipe.steps.map((step, index) => (
                      <li key={index} className="direction">{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recipe;

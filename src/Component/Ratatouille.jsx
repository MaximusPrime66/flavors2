import React, { useState } from 'react';
import './Ratatouille.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import ratatouilleImg from '../Assets/Countries/ratatouille.jpg'; // Import the local image

// Sample recipe data for Ratatouille
const recipe = {
  title: "Ratatouille",
  subtitle: "A colorful and flavorful French vegetable dish.",
  img: ratatouilleImg, // Use the local image
  tags: ["French", "Vegetarian", "Main Course"],
  prepTime: "30 min",
  cookTime: "1 hr",
  totalTime: "1 hr 30 min",
  servings: 4,
  ingredients: [
    { amount: "1", unit: "", name: "eggplant, sliced into rounds" },
    { amount: "1", unit: "", name: "zucchini, sliced into rounds" },
    { amount: "1", unit: "", name: "yellow squash, sliced into rounds" },
    { amount: "1", unit: "", name: "red bell pepper, sliced into rounds" },
    { amount: "1", unit: "", name: "yellow bell pepper, sliced into rounds" },
    { amount: "4", unit: "cloves", name: "garlic, minced" },
    { amount: "1", unit: "cup", name: "tomato sauce" },
    { amount: "1", unit: "tbsp", name: "olive oil" },
    { amount: "", unit: "", name: "Salt and pepper to taste" },
    { amount: "1", unit: "tsp", name: "dried thyme" },
    { amount: "1", unit: "tsp", name: "dried basil" },
    { amount: "1", unit: "tsp", name: "dried oregano" }
  ],
  steps: [
    "Preheat your oven to 375°F (190°C).",
    "Spread the tomato sauce evenly over the bottom of a baking dish.",
    "Arrange the sliced vegetables in a pattern, alternating the colors.",
    "Drizzle the olive oil over the vegetables and sprinkle with minced garlic, salt, pepper, thyme, basil, and oregano.",
    "Cover the dish with aluminum foil and bake for 40 minutes.",
    "Remove the foil and bake for an additional 20 minutes, or until the vegetables are tender.",
    "Serve hot, either as a main dish or a side."
  ]
};

const Ratatouille = () => {
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
    <section className="section">
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

export default Ratatouille;

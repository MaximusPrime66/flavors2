import React, { useState } from 'react';
import './Paneer.scss'; // Import the SCSS file for Paneer Tikka
import likeIcon from './like.svg'; // Import the SVG file for like button
import paneerTikkaImg from '../Assets/Countries/paneer.jpg'; // Import the local image

// Sample recipe data for Paneer Tikka
const recipe = {
  title: "Paneer Tikka",
  subtitle: "A popular Indian appetizer made with marinated paneer cubes.",
  img: paneerTikkaImg, // Use the local image
  tags: ["Appetizer", "Indian"],
  prepTime: "30 min",
  cookTime: "15 min",
  totalTime: "45 min",
  servings: 4,
  ingredients: [
    { amount: "250", unit: "grams", name: "paneer" },
    { amount: "1", unit: "cup", name: "plain yogurt" },
    { amount: "2", unit: "tablespoons", name: "ginger-garlic paste" },
    { amount: "2", unit: "tablespoons", name: "tandoori masala" },
    { amount: "1", unit: "tablespoon", name: "lemon juice" },
    { amount: "1", unit: "teaspoon", name: "red chili powder" },
    { amount: "1", unit: "teaspoon", name: "turmeric powder" },
    { amount: "1", unit: "tablespoon", name: "vegetable oil" },
    { amount: "", unit: "", name: "salt to taste" },
    { amount: "", unit: "", name: "fresh coriander for garnish" }
  ],
  steps: [
    "Cut the paneer into cubes.",
    "In a bowl, mix yogurt, ginger-garlic paste, tandoori masala, lemon juice, red chili powder, turmeric powder, and salt to make the marinade.",
    "Add paneer cubes to the marinade and mix well. Marinate for at least 30 minutes.",
    "Preheat the oven to 200°C (392°F).",
    "Place the marinated paneer cubes on a baking sheet or grill pan.",
    "Bake or grill for 15 minutes, turning halfway through, until charred and cooked through.",
    "Garnish with fresh coriander and serve hot."
  ]
};

const PaneerTikka = () => {
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

export default PaneerTikka;

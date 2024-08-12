import React, { useState } from 'react';
import './Branzino.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import branzinoImg from '../Assets/Countries/branzino.avif'; // Import the local image

// Sample recipe data for Branzino al Forno
const recipe = {
  title: "Branzino al Forno",
  subtitle: "A delightful Italian roasted fish dish.",
  img: branzinoImg, // Use the local image
  tags: ["Italian", "Seafood", "Main Course"],
  prepTime: "15 min",
  cookTime: "30 min",
  totalTime: "45 min",
  servings: 4,
  ingredients: [
    { amount: "1", unit: "whole", name: "branzino fish, cleaned and gutted" },
    { amount: "2", unit: "tbsp", name: "olive oil" },
    { amount: "1", unit: "lemon", name: "sliced" },
    { amount: "4", unit: "sprigs", name: "fresh rosemary" },
    { amount: "4", unit: "sprigs", name: "fresh thyme" },
    { amount: "3", unit: "cloves", name: "garlic, minced" },
    { amount: "", unit: "", name: "Salt and pepper to taste" }
  ],
  steps: [
    "Preheat your oven to 400°F (200°C).",
    "Rub the branzino fish inside and out with olive oil, salt, and pepper.",
    "Stuff the cavity of the fish with lemon slices, rosemary, and thyme.",
    "Place the fish on a baking sheet and scatter minced garlic around it.",
    "Roast in the oven for 25-30 minutes, or until the fish flakes easily with a fork.",
    "Serve hot with your choice of sides."
  ]
};

const BranzinoAlForno = () => {
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

export default BranzinoAlForno;

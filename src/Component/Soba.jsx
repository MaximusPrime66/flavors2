import React, { useState } from 'react';
import './Soba.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import sobaImg from '../Assets/Countries/soba.webp'; // Import the local image

// Sample recipe data for Soba
const recipe = {
  title: "Soba",
  subtitle: "Japanese buckwheat noodles with a nutty flavor.",
  img: sobaImg, // Use the local image
  tags: ["Japanese", "Noodles"],
  prepTime: "15 min",
  cookTime: "10 min",
  totalTime: "25 min",
  servings: 4,
  ingredients: [
    { amount: "200", unit: "g", name: "soba noodles" },
    { amount: "2", unit: "cups", name: "dashi or vegetable broth" },
    { amount: "2", unit: "tablespoons", name: "soy sauce" },
    { amount: "1", unit: "tablespoon", name: "mirin" },
    { amount: "1", unit: "teaspoon", name: "sugar" },
    { amount: "2", unit: "green onions", name: "chopped" },
    { amount: "1", unit: "tablespoon", name: "sesame seeds" }
  ],
  steps: [
    "Cook the soba noodles according to package instructions. Drain and rinse under cold water.",
    "In a saucepan, combine the dashi or vegetable broth, soy sauce, mirin, and sugar. Heat until the mixture starts to simmer.",
    "Divide the cooked soba noodles into bowls.",
    "Pour the hot broth over the noodles.",
    "Garnish with chopped green onions and sesame seeds.",
    "Serve hot or cold, depending on your preference."
  ]
};

const Soba = () => {
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
    <section className="sobasection">
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

export default Soba;

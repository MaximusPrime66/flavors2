import React, { useState } from 'react';
import './Hargow.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import harGowImg from '../Assets/Countries/hargow.jpg'; // Import the local image

// Sample recipe data for Har Gow
const recipe = {
  title: "Har Gow",
  subtitle: "Delicate Chinese shrimp dumplings with a translucent wrapper.",
  img: harGowImg, // Use the local image
  tags: ["Chinese", "Appetizer"],
  prepTime: "30 min",
  cookTime: "10 min",
  totalTime: "40 min",
  servings: 4,
  ingredients: [
    { amount: "1", unit: "cup", name: "wheat starch" },
    { amount: "1/4", unit: "cup", name: "tapioca starch" },
    { amount: "1/2", unit: "pound", name: "shrimp, peeled and deveined" },
    { amount: "1", unit: "tablespoon", name: "soy sauce" },
    { amount: "1", unit: "teaspoon", name: "sesame oil" },
    { amount: "1", unit: "teaspoon", name: "salt" },
    { amount: "1", unit: "teaspoon", name: "sugar" },
    { amount: "1", unit: "cup", name: "water" },
    { amount: "1", unit: "green onion", name: "finely chopped" },
    { amount: "1", unit: "tablespoon", name: "cornstarch" },
    { amount: "water", unit: "for steaming", name: "" }
  ],
  steps: [
    "In a bowl, mix the wheat starch and tapioca starch.",
    "Add water and mix until a smooth dough forms. Cover and let rest.",
    "In another bowl, combine chopped shrimp, soy sauce, sesame oil, salt, sugar, and green onion.",
    "Divide the dough into small pieces and roll each piece into a thin circle.",
    "Place a small amount of filling in the center of each dough circle.",
    "Fold the dough over the filling and pleat the edges to seal.",
    "Place the dumplings on a parchment-lined steamer basket.",
    "Steam over boiling water for about 10 minutes or until the dumplings are cooked through.",
    "Serve warm with dipping sauce."
  ]
};

const HarGow = () => {
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

export default HarGow;

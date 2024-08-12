import React, { useState } from 'react';
import './Kungpao.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import kungPaoChickenImg from '../Assets/Countries/kungpao.jpg'; // Import the local image

// Sample recipe data for Kung Pao Chicken
const recipe = {
  title: "Kung Pao Chicken",
  subtitle: "A spicy and tangy Chinese stir-fry with chicken, peanuts, and vegetables.",
  img: kungPaoChickenImg, // Use the local image
  tags: ["Chinese", "Main Course"],
  prepTime: "20 min",
  cookTime: "15 min",
  totalTime: "35 min",
  servings: 4,
  ingredients: [
    { amount: "1", unit: "pound", name: "chicken breast, diced" },
    { amount: "1", unit: "tablespoon", name: "soy sauce" },
    { amount: "1", unit: "tablespoon", name: "rice vinegar" },
    { amount: "1", unit: "tablespoon", name: "hoisin sauce" },
    { amount: "2", unit: "tablespoons", name: "peanut butter" },
    { amount: "2", unit: "tablespoons", name: "vegetable oil" },
    { amount: "1", unit: "bell pepper, chopped", name: "" },
    { amount: "1", unit: "onion, chopped", name: "" },
    { amount: "1", unit: "cup", name: "peanuts" },
    { amount: "2", unit: "cloves", name: "garlic, minced" },
    { amount: "1", unit: "tablespoon", name: "ginger, minced" },
    { amount: "2", unit: "tablespoons", name: "sichuan peppercorns" },
    { amount: "1", unit: "tablespoon", name: "chili paste" },
    { amount: "1", unit: "cup", name: "chicken broth" },
    { amount: "1", unit: "tablespoon", name: "cornstarch mixed with 2 tablespoons of water" }
  ],
  steps: [
    "In a bowl, marinate the chicken with soy sauce and rice vinegar for 10 minutes.",
    "In a small bowl, mix hoisin sauce, peanut butter, and a bit of chicken broth to create the sauce.",
    "Heat vegetable oil in a pan over medium-high heat.",
    "Add the chicken and cook until browned and cooked through.",
    "Add bell pepper, onion, garlic, ginger, and sichuan peppercorns. Cook until vegetables are tender.",
    "Stir in the peanuts and chili paste.",
    "Pour in the prepared sauce and cook for a few more minutes.",
    "Add the cornstarch mixture to thicken the sauce.",
    "Serve hot with steamed rice."
  ]
};

const KungPaoChicken = () => {
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

export default KungPaoChicken;

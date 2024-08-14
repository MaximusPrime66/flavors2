import React, { useState } from 'react';
import './Donburi.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import donburiImg from '../Assets/Countries/donburi.jpg'; // Import the local image

// Sample recipe data for Donburi
const recipe = {
  title: "Donburi",
  subtitle: "Japanese rice bowl dish with various toppings.",
  img: donburiImg, // Use the local image
  tags: ["Japanese", "Rice Bowl"],
  prepTime: "10 min",
  cookTime: "20 min",
  totalTime: "30 min",
  servings: 4,
  ingredients: [
    { amount: "2", unit: "cups", name: "cooked rice" },
    { amount: "200", unit: "g", name: "chicken or beef, thinly sliced" },
    { amount: "1", unit: "onion", name: "sliced" },
    { amount: "2", unit: "tablespoons", name: "soy sauce" },
    { amount: "2", unit: "tablespoons", name: "mirin" },
    { amount: "1", unit: "tablespoon", name: "sugar" },
    { amount: "1", unit: "cup", name: "dashi or chicken broth" },
    { amount: "2", unit: "eggs", name: "beaten" },
    { amount: "2", unit: "green onions", name: "chopped" },
    { amount: "1", unit: "tablespoon", name: "sesame seeds" }
  ],
  steps: [
    "In a large skillet, heat a little oil over medium heat and sauté the sliced onion until translucent.",
    "Add the chicken or beef to the skillet and cook until browned.",
    "In a small bowl, mix the soy sauce, mirin, sugar, and dashi or chicken broth.",
    "Pour the sauce mixture over the cooked meat and onions in the skillet. Simmer for about 5 minutes.",
    "Add the beaten eggs to the skillet, stirring gently to combine with the sauce.",
    "Cook until the eggs are just set, about 2-3 minutes.",
    "Divide the cooked rice into bowls and top with the meat and egg mixture.",
    "Garnish with chopped green onions and sesame seeds.",
    "Serve hot."
  ]
};

const Donburi = () => {
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
    <section className="donsection">
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

export default Donburi;

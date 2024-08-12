import React, { useState } from 'react';
import './Tteokbokki.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import tteokbokkiImg from '../Assets/Countries/tteokbokki.webp'; // Import the local image

// Sample recipe data for Tteokbokki
const recipe = {
  title: "Tteokbokki",
  subtitle: "Spicy Korean rice cakes with a savory sauce.",
  img: tteokbokkiImg, // Use the local image
  tags: ["Korean", "Appetizer"],
  prepTime: "15 min",
  cookTime: "20 min",
  totalTime: "35 min",
  servings: 4,
  ingredients: [
    { amount: "1", unit: "lb", name: "tteok (Korean rice cakes)" },
    { amount: "1", unit: "cup", name: "fish cakes, sliced" },
    { amount: "1", unit: "cup", name: "Korean chili paste (gochujang)" },
    { amount: "2", unit: "tbsp", name: "soy sauce" },
    { amount: "2", unit: "tbsp", name: "sugar" },
    { amount: "2", unit: "cloves", name: "garlic, minced" },
    { amount: "2", unit: "cups", name: "water or chicken broth" },
    { amount: "2", unit: "green onions", name: "chopped" },
    { amount: "1", unit: "tbsp", name: "sesame seeds" },
    { amount: "Sesame oil", unit: "", name: "for drizzling" }
  ],
  steps: [
    "In a large pan, combine water or chicken broth with gochujang, soy sauce, sugar, and minced garlic. Bring to a simmer over medium heat.",
    "Add the tteok (rice cakes) and fish cakes to the pan. Cook for 10-15 minutes, or until the sauce thickens and the tteok is heated through.",
    "Stir occasionally to ensure the tteok is evenly coated with the sauce.",
    "Add chopped green onions and sesame seeds. Drizzle with sesame oil before serving.",
    "Serve hot as a snack or appetizer."
  ]
};

const Tteokbokki = () => {
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

export default Tteokbokki;

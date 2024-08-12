import React, { useState } from 'react';
import './Dorayaki.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import dorayakiImg from '../Assets/Countries/dorayaki.jpg'; // Import the local image

// Sample recipe data for Dorayaki
const recipe = {
  title: "Dorayaki",
  subtitle: "Japanese sweet pancakes filled with red bean paste.",
  img: dorayakiImg, // Use the local image
  tags: ["Japanese", "Dessert"],
  prepTime: "15 min",
  cookTime: "20 min",
  totalTime: "35 min",
  servings: 4,
  ingredients: [
    { amount: "1", unit: "cup", name: "all-purpose flour" },
    { amount: "1", unit: "tablespoon", name: "baking powder" },
    { amount: "1/4", unit: "cup", name: "sugar" },
    { amount: "1/2", unit: "cup", name: "milk" },
    { amount: "2", unit: "eggs", name: "beaten" },
    { amount: "2", unit: "tablespoons", name: "honey" },
    { amount: "1/2", unit: "cup", name: "sweet red bean paste (anko)" },
    { amount: "butter", unit: "for cooking", name: "" }
  ],
  steps: [
    "In a bowl, whisk together the flour, baking powder, and sugar.",
    "In another bowl, mix the milk, eggs, and honey.",
    "Combine the wet and dry ingredients and stir until smooth.",
    "Heat a non-stick skillet or griddle over medium heat and lightly grease with butter.",
    "Pour batter onto the skillet to form small pancakes. Cook until bubbles appear on the surface, then flip and cook until golden brown.",
    "Repeat with remaining batter.",
    "Spread a layer of red bean paste on one pancake and top with another to form a sandwich.",
    "Serve warm or at room temperature."
  ]
};

const Dorayaki = () => {
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

export default Dorayaki;

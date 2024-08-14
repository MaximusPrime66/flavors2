import React, { useState } from 'react';
import './Mochi.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import mochiImg from '../Assets/Countries/mochi.avif'; // Import the local image

// Sample recipe data for Mochi
const recipe = {
  title: "Mochi",
  subtitle: "Sweet and chewy Japanese rice cakes.",
  img: mochiImg, // Use the local image
  tags: ["Japanese", "Dessert"],
  prepTime: "20 min",
  cookTime: "10 min",
  totalTime: "30 min",
  servings: 6,
  ingredients: [
    { amount: "1", unit: "cup", name: "glutinous rice flour" },
    { amount: "1/2", unit: "cup", name: "sugar" },
    { amount: "3/4", unit: "cup", name: "water" },
    { amount: "Cornstarch", unit: "", name: "for dusting" },
    { amount: "Optional fillings", unit: "", name: "such as red bean paste or fruit" }
  ],
  steps: [
    "In a large bowl, mix the glutinous rice flour and sugar.",
    "Gradually add water to the dry ingredients and mix until smooth.",
    "Pour the mixture into a heatproof dish and steam over boiling water for about 10 minutes.",
    "Remove from the steamer and let it cool slightly.",
    "Dust your hands and a clean surface with cornstarch to prevent sticking.",
    "Transfer the mochi dough onto the dusted surface and knead until smooth.",
    "Divide the dough into small pieces and shape into balls or discs.",
    "If using fillings, flatten a piece of dough, add a small amount of filling, and seal the edges.",
    "Serve the mochi at room temperature or chilled."
  ]
};

const Mochi = () => {
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
    <section className="mochisection">
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

export default Mochi;

import React, { useState } from 'react';
import './Thandai.scss'; // Import the SCSS file for Thandai
import likeIcon from './like.svg'; // Import the SVG file for like button
import thandaiImg from '../Assets/Countries/thandai.jpg'; // Import the local image

// Sample recipe data for Thandai
const recipe = {
  title: "Thandai",
  subtitle: "A refreshing and aromatic Indian drink made with a blend of nuts, spices, and milk.",
  img: thandaiImg, // Use the local image
  tags: ["Beverage", "Indian"],
  prepTime: "15 min",
  cookTime: "0 min",
  totalTime: "15 min",
  servings: 4,
  ingredients: [
    { amount: "1", unit: "cup", name: "almonds (soaked)" },
    { amount: "1", unit: "cup", name: "cashews (soaked)" },
    { amount: "1/2", unit: "cup", name: "poppy seeds" },
    { amount: "10", unit: "cardamom pods" },
    { amount: "1/2", unit: "cup", name: "sugar" },
    { amount: "4", unit: "cups", name: "milk" },
    { amount: "1", unit: "tablespoon", name: "rose water" },
    { amount: "1", unit: "tablespoon", name: "saffron strands (soaked in warm milk)" },
    { amount: "", unit: "", name: "ice cubes (optional)" },
    { amount: "", unit: "", name: "fresh mint leaves for garnish" }
  ],
  steps: [
    "In a blender, combine almonds, cashews, poppy seeds, cardamom pods, and sugar. Blend with a little water to make a smooth paste.",
    "In a large bowl, mix the milk with the nut paste until well combined.",
    "Add rose water and saffron milk to the mixture. Stir well.",
    "Chill the thandai in the refrigerator for at least 2 hours.",
    "Serve chilled with ice cubes if desired. Garnish with fresh mint leaves."
  ]
};

const Thandai = () => {
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
    <section className="thansection">
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

export default Thandai;

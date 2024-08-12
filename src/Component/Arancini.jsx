import React, { useState } from 'react';
import './Arancini.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import aranciniImg from '../Assets/Countries/arancini.jpg'; // Import the local image

// Sample recipe data for Arancini
const recipe = {
  title: "Arancini",
  subtitle: "Crispy and delicious Italian rice balls filled with cheese.",
  img: aranciniImg, // Use the local image
  tags: ["Italian", "Appetizer"],
  prepTime: "30 min",
  cookTime: "30 min",
  totalTime: "1 hr",
  servings: 4,
  ingredients: [
    { amount: "2", unit: "cups", name: "cooked risotto rice (cooled)" },
    { amount: "1", unit: "cup", name: "mozzarella cheese, cubed" },
    { amount: "1/2", unit: "cup", name: "Parmesan cheese, grated" },
    { amount: "1", unit: "large", name: "egg" },
    { amount: "1/2", unit: "cup", name: "all-purpose flour" },
    { amount: "1", unit: "cup", name: "bread crumbs" },
    { amount: "1", unit: "cup", name: "marinara sauce (for serving)" },
    { amount: "Vegetable oil", unit: "", name: "for frying" }
  ],
  steps: [
    "Preheat your oil in a deep fryer or large pan to 350°F (175°C).",
    "In a large bowl, mix the risotto rice, mozzarella cheese, Parmesan cheese, and egg until well combined.",
    "Shape the mixture into 1-inch balls.",
    "Roll each ball in flour, then dip in beaten egg, and finally coat with bread crumbs.",
    "Carefully fry the arancini in batches until golden brown, about 3-4 minutes per batch.",
    "Drain on paper towels and serve hot with marinara sauce."
  ]
};

const Arancini = () => {
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

export default Arancini;

import React, { useState } from 'react';
import './CremeBrulee.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import cremeBruleeImg from '../Assets/Countries/CremeBrulee.jpg'; // Import the local image

// Sample recipe data for Crème Brûlée
const recipe = {
  title: "Crème Brûlée",
  subtitle: "A rich and creamy French dessert with a caramelized sugar topping.",
  img: cremeBruleeImg, // Use the local image
  tags: ["French", "Dessert"],
  prepTime: "20 min",
  cookTime: "1 hr",
  totalTime: "1 hr 20 min",
  servings: 4,
  ingredients: [
    { amount: "2", unit: "cups", name: "heavy cream" },
    { amount: "1", unit: "cup", name: "whole milk" },
    { amount: "1", unit: "cup", name: "granulated sugar" },
    { amount: "5", unit: "large", name: "egg yolks" },
    { amount: "1", unit: "tsp", name: "vanilla extract" },
    { amount: "", unit: "", name: "extra sugar for caramelizing" }
  ],
  steps: [
    "Preheat your oven to 325°F (160°C).",
    "In a medium saucepan, combine the cream and milk. Heat over medium heat until just boiling. Remove from heat and let it cool slightly.",
    "In a bowl, whisk together the egg yolks and granulated sugar until pale and slightly thickened.",
    "Gradually whisk the hot cream mixture into the egg yolks, then stir in the vanilla extract.",
    "Strain the mixture through a fine-mesh sieve into a large bowl or measuring jug.",
    "Divide the mixture evenly among ramekins and place them in a baking dish.",
    "Add hot water to the baking dish until it reaches halfway up the sides of the ramekins.",
    "Bake for 45-50 minutes, or until the custards are set around the edges but still slightly jiggly in the center.",
    "Remove from the oven and let cool to room temperature, then refrigerate for at least 2 hours.",
    "Before serving, sprinkle a thin layer of sugar on top of each custard and caramelize with a kitchen torch or under the broiler until golden brown."
  ]
};

const CrèmeBrûlée = () => {
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

export default CrèmeBrûlée;

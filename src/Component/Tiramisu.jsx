import React, { useState } from 'react';
import './Tiramisu.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import tiramisuImg from '../Assets/Countries/tiramisu.jpg'; // Import the local image

// Sample recipe data for Tiramisu
const recipe = {
  title: "Tiramisu",
  subtitle: "A classic Italian dessert with layers of coffee-soaked ladyfingers and mascarpone cream.",
  img: tiramisuImg, // Use the local image
  tags: ["Italian", "Dessert"],
  prepTime: "20 min",
  cookTime: "0 min",
  totalTime: "4 hrs (chill time)",
  servings: 6,
  ingredients: [
    { amount: "6", unit: "", name: "egg yolks" },
    { amount: "3/4", unit: "cup", name: "granulated sugar" },
    { amount: "1", unit: "cup", name: "mascarpone cheese" },
    { amount: "1", unit: "cup", name: "heavy cream" },
    { amount: "1", unit: "cup", name: "strong brewed coffee, cooled" },
    { amount: "1/2", unit: "cup", name: "coffee liqueur (optional)" },
    { amount: "24", unit: "", name: "ladyfingers" },
    { amount: "2", unit: "tbsp", name: "unsweetened cocoa powder" },
    { amount: "", unit: "", name: "Shaved chocolate for garnish (optional)" }
  ],
  steps: [
    "In a medium bowl, whisk egg yolks and sugar together until pale and thick.",
    "Add mascarpone cheese to the egg yolk mixture and mix until smooth.",
    "In a separate bowl, whip the heavy cream until stiff peaks form.",
    "Fold the whipped cream into the mascarpone mixture until combined.",
    "In a shallow dish, combine the brewed coffee and coffee liqueur (if using).",
    "Dip ladyfingers quickly into the coffee mixture and layer them in the bottom of a serving dish.",
    "Spread half of the mascarpone mixture over the ladyfingers.",
    "Repeat with another layer of dipped ladyfingers and the remaining mascarpone mixture.",
    "Cover and refrigerate for at least 4 hours or overnight.",
    "Before serving, dust with cocoa powder and garnish with shaved chocolate, if desired."
  ]
};

const Tiramisu = () => {
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
                        {ingredient.optional && (
                          <span className="is-italic"> (optional)</span>
                        )}
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

export default Tiramisu;

import React, { useState } from 'react';
import './Dakgalbi.scss'; // Import the SCSS file
import likeIcon from './like.svg'; // Import the SVG file
import dakGalbiImg from '../Assets/Countries/dakgalbi.jpg'; // Import the local image

// Sample recipe data for Dak-galbi
const recipe = {
  title: "Dak-galbi",
  subtitle: "Spicy Korean chicken stir-fry with vegetables.",
  img: dakGalbiImg, // Use the local image
  tags: ["Korean", "Main Course"],
  prepTime: "20 min",
  cookTime: "30 min",
  totalTime: "50 min",
  servings: 4,
  ingredients: [
    { amount: "1 lb", unit: "", name: "chicken thighs, cut into bite-sized pieces" },
    { amount: "1", unit: "cup", name: "Korean chili paste (gochujang)" },
    { amount: "1/4", unit: "cup", name: "soy sauce" },
    { amount: "2", unit: "tablespoons", name: "sesame oil" },
    { amount: "2", unit: "tablespoons", name: "honey" },
    { amount: "4", unit: "cloves", name: "garlic, minced" },
    { amount: "1", unit: "inch", name: "ginger, minced" },
    { amount: "1", unit: "cup", name: "cabbage, chopped" },
    { amount: "1", unit: "cup", name: "carrots, sliced" },
    { amount: "2", unit: "green onions", name: "chopped" },
    { amount: "1", unit: "tablespoon", name: "sesame seeds" },
    { amount: "Rice", unit: "", name: "for serving" }
  ],
  steps: [
    "In a large bowl, combine the gochujang, soy sauce, sesame oil, honey, garlic, and ginger to make the marinade.",
    "Add the chicken pieces to the marinade and mix well. Let it marinate for at least 30 minutes.",
    "Heat a large skillet or wok over medium-high heat and add the marinated chicken.",
    "Stir-fry the chicken for about 5 minutes, then add the cabbage and carrots.",
    "Continue to cook for another 15-20 minutes, or until the chicken is cooked through and vegetables are tender.",
    "Garnish with green onions and sesame seeds. Serve hot over rice."
  ]
};

const DakGalbi = () => {
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

export default DakGalbi;

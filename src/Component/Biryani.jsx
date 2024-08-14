import React, { useState } from 'react';
import './Biryani.scss'; // Import the SCSS file for Hyderabadi Biryani
import likeIcon from './like.svg'; // Import the SVG file for like button
import hyderabadiBiryaniImg from '../Assets/Countries/biryani.jpg'; // Import the local image

// Sample recipe data for Hyderabadi Biryani
const recipe = {
  title: "Hyderabadi Biryani",
  subtitle: "A fragrant and flavorful rice dish with spiced meat and saffron.",
  img: hyderabadiBiryaniImg, // Use the local image
  tags: ["Main Course", "Indian"],
  prepTime: "1 hour",
  cookTime: "45 min",
  totalTime: "1 hour 45 min",
  servings: 6,
  ingredients: [
    { amount: "500", unit: "grams", name: "chicken (cut into pieces)" },
    { amount: "2", unit: "cups", name: "basmati rice" },
    { amount: "1", unit: "cup", name: "plain yogurt" },
    { amount: "2", unit: "tablespoons", name: "ginger-garlic paste" },
    { amount: "2", unit: "tablespoons", name: "biryani masala" },
    { amount: "1", unit: "teaspoon", name: "red chili powder" },
    { amount: "1", unit: "teaspoon", name: "turmeric powder" },
    { amount: "1", unit: "cup", name: "fresh coriander (chopped)" },
    { amount: "1", unit: "cup", name: "fresh mint leaves (chopped)" },
    { amount: "2", unit: "tablespoons", name: "ghee" },
    { amount: "1", unit: "teaspoon", name: "saffron strands (soaked in warm milk)" },
    { amount: "2", unit: "large", name: "onions (sliced and fried)" },
    { amount: "", unit: "", name: "salt to taste" },
    { amount: "", unit: "", name: "water for cooking" }
  ],
  steps: [
    "Marinate the chicken with yogurt, ginger-garlic paste, biryani masala, red chili powder, turmeric powder, and salt. Let it marinate for at least 1 hour.",
    "Wash and soak the basmati rice for 30 minutes. Drain the water.",
    "In a large pot, heat ghee and cook the marinated chicken until it's 80% cooked.",
    "In another pot, bring water to a boil, add salt, and cook the soaked rice until it is 70% cooked.",
    "Layer the partially cooked rice over the chicken in the pot. Sprinkle chopped coriander, mint leaves, fried onions, and saffron milk over the rice.",
    "Cover the pot with a lid and cook on low heat for 20-25 minutes.",
    "Once done, let it rest for 10 minutes before serving. Gently fluff the rice and serve hot with raita or salad."
  ]
};

const HyderabadiBiryani = () => {
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
    <section className="brisection">
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

export default HyderabadiBiryani;

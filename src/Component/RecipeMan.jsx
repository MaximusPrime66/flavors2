import React, { useState, useEffect } from 'react';
import './RecipeMan.css'; // Ensure you have a corresponding CSS file for styling
import { Link } from 'react-router-dom';

const RecipeMan = () => {
  const [activeTab, setActiveTab] = useState('recipes'); // Set default tab
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [cuisineId, setCuisineId] = useState(''); // Add state for cuisineId
  const [recipeIdToDelete, setRecipeIdToDelete] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
  const [showDeleteRecipeForm, setShowDeleteRecipeForm] = useState(false);
  const [error, setError] = useState('');

  // Fetch recipes on component mount
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/recipes');
        if (response.ok) {
          const data = await response.json();
          setRecipes(data);
          setError('');
        } else {
          throw new Error('Failed to fetch recipes');
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Error fetching recipes. Please try again later.');
      }
    };

    fetchRecipes();
  }, []);

  // Handle adding a recipe
  const handleAddRecipe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/recipes/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cuisineId, // Include cuisineId
          recipeName,
          recipeDescription,
        }),
      });

      if (response.ok) {
        alert('Recipe added successfully!');
        setRecipeName('');
        setRecipeDescription('');
        setCuisineId(''); // Reset cuisineId
        setShowAddRecipeForm(false);
        // Refresh recipe list
        const updatedResponse = await fetch('http://localhost:8080/api/recipes');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setRecipes(updatedData);
          setError('');
        } else {
          throw new Error('Failed to fetch updated recipes');
        }
      } else {
        throw new Error('Failed to add recipe');
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('An unexpected error occurred while adding the recipe.');
    }
  };

  // Handle deleting a recipe
  const handleDeleteRecipe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/recipes/delete/${recipeIdToDelete}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Recipe deleted successfully!');
        setRecipeIdToDelete('');
        setShowDeleteRecipeForm(false);
        // Refresh recipe list
        const updatedResponse = await fetch('http://localhost:8080/api/recipes');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          setRecipes(updatedData);
          setError('');
        } else {
          throw new Error('Failed to fetch updated recipes');
        }
      } else {
        throw new Error('Failed to delete recipe');
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
      alert('An unexpected error occurred while deleting the recipe.');
    }
  };

  return (
    <div className="recipe-man-container">
      <nav className="sidebar">
        <h2>Recipe Admin</h2>
        <ul>
          <li onClick={() => setActiveTab('dashboard')} className={activeTab === 'dashboard' ? 'active' : ''}>
            Dashboard
          </li>
          <li onClick={() => setActiveTab('cuisines')} className={activeTab === 'cuisines' ? 'active' : ''}>
            Manage Cuisines
          </li>
          <Link to='/recipeman'>
            <li onClick={() => setActiveTab('recipes')} className={activeTab === 'recipes' ? 'active' : ''}>
              Manage Recipes
            </li>
          </Link>
        </ul>
      </nav>

      <main className="recipe-main-content">
        <div className="recipe-actions">
          <button onClick={() => setShowAddRecipeForm(true)} className="recipe-btn">
            Add New Recipe
          </button>

          {showAddRecipeForm && (
            <div className="popup-overlay">
              <div className="popup-container">
                <button className="popup-close" onClick={() => setShowAddRecipeForm(false)}>
                  &times;
                </button>
                <form onSubmit={handleAddRecipe} className="recipe-form">
                  <h2>Add New Recipe</h2>
                  <input
                    type="number"
                    value={cuisineId}
                    onChange={(e) => setCuisineId(e.target.value)}
                    placeholder="Cuisine ID"
                    required
                  />
                  <input
                    type="text"
                    value={recipeName}
                    onChange={(e) => setRecipeName(e.target.value)}
                    placeholder="Recipe Name"
                    required
                  />
                  <textarea
                    value={recipeDescription}
                    onChange={(e) => setRecipeDescription(e.target.value)}
                    placeholder="Recipe Description"
                    required
                  />
                  <button type="submit" className="recipe-btn">Add Recipe</button>
                </form>
              </div>
            </div>
          )}

          <button onClick={() => setShowDeleteRecipeForm(true)} className="recipe-btn">
            Delete Recipe
          </button>

          {showDeleteRecipeForm && (
            <div className="popup-overlay">
              <div className="popup-container">
                <button className="popup-close" onClick={() => setShowDeleteRecipeForm(false)}>
                  &times;
                </button>
                <form onSubmit={handleDeleteRecipe} className="recipe-form">
                  <h2>Delete Recipe</h2>
                  <input
                    type="number"
                    value={recipeIdToDelete}
                    onChange={(e) => setRecipeIdToDelete(e.target.value)}
                    placeholder="Recipe ID to delete"
                    required
                  />
                  <button type="submit" className="recipe-btn">Delete Recipe</button>
                </form>
              </div>
            </div>
          )}
        </div>

        <section id="recipe-management" className="recipe-content">
          <h2>Available Recipes</h2>
          {error && <p className="error-message">{error}</p>}
          <table className="recipe-table">
            <thead>
              <tr>
                <th>Recipe ID</th>
                <th>Cuisine ID</th>
                <th>Recipe Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {recipes.length === 0 ? (
                <tr>
                  <td colSpan="4">No recipes available</td>
                </tr>
              ) : (
                recipes.map((recipe) => (
                  <tr key={recipe.id}>
                    <td>{recipe.id}</td>
                    <td>{recipe.cuisineId}</td>
                    <td>{recipe.recipeName}</td>
                    <td>{recipe.recipeDescription}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
      </main>
    </div>
  );
};

export default RecipeMan;

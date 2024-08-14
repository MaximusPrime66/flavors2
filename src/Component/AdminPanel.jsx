import React, { useState, useEffect } from 'react';
import './AdminPanel.css';
import { Link } from 'react-router-dom';

const AdminPanel = () => {
  // State for recipe management
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [cuisineId, setCuisineId] = useState('');
  const [recipeIdToDelete, setRecipeIdToDelete] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
  const [showDeleteRecipeForm, setShowDeleteRecipeForm] = useState(false);
  const [error, setError] = useState('');

  // Fetch recipes from the server
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/recipes');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        console.log('Fetched recipes:', data);
  
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setError('Failed to fetch recipes');
      }
    };
  
    fetchRecipes();
  }, []);
  

  // Add a new recipe
  const handleAddRecipe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/recipes/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ recipeName, recipeDescription, cuisineId }),
      });
      if (!response.ok) throw new Error('Failed to add recipe');
      alert('Recipe added successfully!');
      setRecipeName('');
      setRecipeDescription('');
      setCuisineId('');
      setShowAddRecipeForm(false);
      // Refresh the recipe list
      const updatedResponse = await fetch('http://localhost:8080/api/recipes');
      const updatedData = await updatedResponse.json();
      if (Array.isArray(updatedData)) {
        setRecipes(updatedData);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.error('Error adding recipe:', error);
      alert('Error adding recipe');
    }
  };

  // Delete a recipe
  const handleDeleteRecipe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/recipes/${recipeIdToDelete}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete recipe');
      alert('Recipe deleted successfully!');
      setRecipeIdToDelete('');
      setShowDeleteRecipeForm(false);
      // Refresh the recipe list
      const updatedResponse = await fetch('http://localhost:8080/api/recipes');
      const updatedData = await updatedResponse.json();
      if (Array.isArray(updatedData)) {
        setRecipes(updatedData);
      } else {
        throw new Error('Invalid data format');
      }
    } catch (error) {
      console.error('Error deleting recipe:', error);
      alert('Error deleting recipe');
    }
  };

  // Group recipes by cuisine
  const groupRecipesByCuisine = (recipes) => {
    console.log('Recipes in groupRecipesByCuisine:', recipes); // Debugging statement
    return recipes.reduce((acc, recipe) => {
      const cuisine = recipe.cuisine_name; // Adjust if necessary
      if (!acc[cuisine]) {
        acc[cuisine] = [];
      }
      acc[cuisine].push(recipe);
      return acc;
    }, {});
  };

  const categorizedRecipes = groupRecipesByCuisine(recipes);
  console.log('Categorized recipes:', categorizedRecipes); // Check the grouped data

  return (
    <div className="admin-panel-container">
      <nav className="admin-sidebar">
        <h2>Recipe Admin</h2>
        <Link to="/dashboard" className="nav-link">Dashboard</Link>
        <Link to="/manage-recipes" className="nav-link">Manage Recipes</Link>
        <Link to="/cuisineman" className="nav-link">Manage Cuisines</Link>
        <Link to="/recipeman" className="nav-link">Manage Recipes</Link>
        <a href="#" className="nav-link">Settings</a>
      </nav>
      <div className="admin-main-content">
        <header className="admin-topbar">
          <h1>Admin Dashboard</h1>
          <div className="admin-user-info">
            <p>Welcome, Admin</p>
            <a href="#" className="nav-link">Logout</a>
          </div>
        </header>
        <div className="admin-content">
          {error && <p className="error-message">{error}</p>}
          <div className="admin-cards">
            <div className="admin-card">
              <h3 className='mix'>Total Recipes</h3>
              <p className='max'>{recipes.length} recipes</p>
            </div>
            <div className="admin-card">
              <h3 className='mix'>Pending Approvals</h3>
              <p className='max'>5 recipes pending</p>
            </div>
            <div className="admin-card">
              <h3 className='mix'>Recent Reviews</h3>
              <p className='max'>15 new reviews</p>
            </div>
          </div>
          <div className="admin-actions">
            {/* Add Recipe Button */}
            <button
              onClick={() => setShowAddRecipeForm(true)}
              className="admin-btn"
              aria-label="Add New Recipe"
            >
              Add New Recipe
            </button>

            {/* Add Recipe Form Pop-up */}
            {showAddRecipeForm && (
              <div className="popup-overlay show">
                <div className="popup-container">
                  <button
                    className="popup-close"
                    onClick={() => setShowAddRecipeForm(false)}
                    aria-label="Close Add Recipe Form"
                  >
                    &times;
                  </button>
                  <form onSubmit={handleAddRecipe} className="admin-form">
                    <h2>Add New Recipe</h2>
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
                    <select
                      value={cuisineId}
                      onChange={(e) => setCuisineId(e.target.value)}
                      required
                    >
                      <option value="">Select Cuisine</option>
                      <option value="1">French</option>
                      <option value="2">Italian</option>
                      <option value="3">Chinese</option>
                      <option value="4">Japanese</option>
                      <option value="5">Korean</option>
                      <option value="6">Indian</option>
                    </select>
                    <button type="submit" className="admin-btn">Add Recipe</button>
                  </form>
                </div>
              </div>
            )}

            {/* Delete Recipe Button */}
            <button
              onClick={() => setShowDeleteRecipeForm(true)}
              className="admin-btn"
              aria-label="Delete Recipe"
            >
              Delete Recipe
            </button>

            {/* Delete Recipe Form Pop-up */}
            {showDeleteRecipeForm && (
              <div className="popup-overlay show">
                <div className="popup-container">
                  <button
                    className="popup-close"
                    onClick={() => setShowDeleteRecipeForm(false)}
                    aria-label="Close Delete Recipe Form"
                  >
                    &times;
                  </button>
                  <form onSubmit={handleDeleteRecipe} className="admin-form">
                    <h2>Delete Recipe</h2>
                    <input
                      type="number"
                      value={recipeIdToDelete}
                      onChange={(e) => setRecipeIdToDelete(e.target.value)}
                      placeholder="Recipe ID"
                      required
                    />
                    <button type="submit" className="admin-btn">Delete Recipe</button>
                  </form>
                </div>
              </div>
            )}
          </div>

          {/* Display recipes grouped by cuisine */}
          <div className="recipe-list">
            {Object.keys(categorizedRecipes).map((cuisine) => (
              <div key={cuisine} className="recipe-category">
                <h2>{cuisine}</h2>
                <div className="recipe-items">
                  {categorizedRecipes[cuisine].map((recipe) => (
                    <div key={recipe.id} className="recipe-item">
                      <h3>{recipe.recipeName}</h3>
                      <p>{recipe.recipeDescription}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

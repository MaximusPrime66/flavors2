import React, { useState, useEffect } from 'react';

import './AdminDashboard.css'; // Assuming you have SCSS for styling
import { Link } from 'react-router-dom';
import CuisineMan from './CuisineMan'; // Import the CuisineMan component

const AdminDashboard = () => {
  // State management
  const [activeTab, setActiveTab] = useState('dashboard');
  const [recipeName, setRecipeName] = useState('');
  const [recipeDescription, setRecipeDescription] = useState('');
  const [cuisineId, setCuisineId] = useState('');
  const [recipeIdToDelete, setRecipeIdToDelete] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [showAddRecipeForm, setShowAddRecipeForm] = useState(false);
  const [showDeleteRecipeForm, setShowDeleteRecipeForm] = useState(false);
  const [error, setError] = useState('');

  // Fetch recipes
  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipes');
        const data = await response.json();
        console.log('Fetched recipes:', data); // Log the data
        if (Array.isArray(data)) {
          setRecipes(data);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (error) {
        // console.error('Error fetching recipes:', error);
        setError('Failed to fetch recipes');
      }
    };
    

    fetchRecipes();
  }, []);

  // Add recipe
  const handleAddRecipe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/recipes/add', {
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
      const updatedResponse = await fetch('/api/recipes');
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

  // Delete recipe
  const handleDeleteRecipe = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`/api/recipes/delete/${recipeIdToDelete}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete recipe');
      alert('Recipe deleted successfully!');
      setRecipeIdToDelete('');
      setShowDeleteRecipeForm(false);
      const updatedResponse = await fetch('/api/recipes');
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

  return (
    <div className="admin-dashboard">
      <nav className="sidebar">
        <h2>Recipe Admin</h2><br></br>
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

      <div className="got">
        {activeTab === 'dashboard' && (
          <div className="dashboard">
            <header className="admin-topbar">
              <h1>Admin Dashboard</h1>
              <div className="admin-user-info">
                <p>Welcome, Admin</p>
                <Link to="/logout" className="nav-link">Logout</Link>
              </div>
            </header>
            <div className="admin-cards">
              <div className="admin-card">
                <h3>Total Recipes</h3>
                <p>18 recipes</p>
              </div>
              <div className="admin-card">
                <h3>Pending Approvals</h3>
                <p>5 recipes pending</p>
              </div>
              <div className="admin-card">
                <h3>Recent Reviews</h3>
                <p>15 new reviews</p>
              </div>
            </div>
          </div>
        )}

     
          </div>
      
        {activeTab === 'cuisines' && (
          <div className="cuisines">
            {/* <h1>Manage Cuisines</h1> */}
            <CuisineMan /> {/* Display CuisineMan component here */}
          </div>
        )}
      </div>

  );
};

export default AdminDashboard;

import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import './CuisineMan.css';

const CuisineMan = () => {
  const [cuisineName, setCuisineName] = useState('');
  const [cuisineDescription, setCuisineDescription] = useState('');
  const [cuisineIdToDelete, setCuisineIdToDelete] = useState('');
  const [cuisines, setCuisines] = useState([]);

  const [showAddCuisineForm, setShowAddCuisineForm] = useState(false);
  const [showDeleteCuisineForm, setShowDeleteCuisineForm] = useState(false);

  // Fetch cuisines on component mount
  useEffect(() => {
    const fetchCuisines = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/cuisines');
        if (response.ok) {
          const data = await response.json();
          console.log('Fetched cuisines:', data); // Log the fetched data
          setCuisines(data);
        } else {
          console.error('Failed to fetch cuisines:', response.status, await response.text());
        }
      } catch (error) {
        console.error('Error fetching cuisines:', error);
      }
    };

    fetchCuisines();
  }, []);

  // Handle adding a cuisine
  const handleAddCuisine = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:8080/api/cuisines', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cuisineName,
          cuisineDescription,
        }),
      });

      if (response.ok) {
        alert('Cuisine added successfully!');
        setCuisineName('');
        setCuisineDescription('');
        setShowAddCuisineForm(false);
        // Refresh cuisine list
        const updatedResponse = await fetch('http://localhost:8080/api/cuisines');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          console.log('Updated cuisines:', updatedData); // Log the updated data
          setCuisines(updatedData);
        } else {
          console.error('Failed to fetch updated cuisines:', updatedResponse.status, await updatedResponse.text());
        }
      } else {
        const errorText = await response.text();
        console.error('Failed to add cuisine:', response.status, errorText);
        alert(`Failed to add cuisine: ${errorText}`);
      }
    } catch (error) {
      console.error('Error adding cuisine:', error);
      alert('An unexpected error occurred while adding cuisine.');
    }
  };

  // Handle deleting a cuisine
  const handleDeleteCuisine = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/cuisines/${cuisineIdToDelete}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Cuisine deleted successfully!');
        setCuisineIdToDelete('');
        setShowDeleteCuisineForm(false);
        // Refresh cuisine list
        const updatedResponse = await fetch('http://localhost:8080/api/cuisines');
        if (updatedResponse.ok) {
          const updatedData = await updatedResponse.json();
          console.log('Updated cuisines:', updatedData); // Log the updated data
          setCuisines(updatedData);
        } else {
          console.error('Failed to fetch updated cuisines:', updatedResponse.status, await updatedResponse.text());
        }
      } else {
        const errorText = await response.text();
        console.error('Failed to delete cuisine:', response.status, errorText);
        alert(`Failed to delete cuisine: ${errorText}`);
      }
    } catch (error) {
      console.error('Error deleting cuisine:', error);
      alert('An unexpected error occurred while deleting cuisine.');
    }
  };

  return (
    <div className="admin-panel-container">
      {/* <aside className="admin-sidebar">
        <h2>Recipe Admin</h2>
        <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
        <Link to="/admin" className="sidebar-link">Manage Recipes</Link>
        <Link to="/cuisineman" className="sidebar-link">Manage Cuisines</Link>
        <a href="#settings" className="sidebar-link">Settings</a>
      </aside> */}

      <main className="admin-main-content">
        

        <div className="admin-actions">
          <button onClick={() => setShowAddCuisineForm(true)} className="admin-btn">
            Add New Cuisine
          </button>

          {showAddCuisineForm && (
            <div className="popup-overlay">
              <div className="popup-container">
                <button className="popup-close" onClick={() => setShowAddCuisineForm(false)}>
                  &times;
                </button>
                <form onSubmit={handleAddCuisine} className="admin-form">
                  <h2>Add New Cuisine</h2>
                  <input className='git'
                    type="text"
                    value={cuisineName}
                    onChange={(e) => setCuisineName(e.target.value)}
                    placeholder="Cuisine Name"
                    required
                  />
                  <textarea
                    value={cuisineDescription}
                    onChange={(e) => setCuisineDescription(e.target.value)}
                    placeholder="Cuisine Description"
                    required
                  />
                  <button type="submit" className="admin-btn">Add Cuisine</button>
                </form>
              </div>
            </div>
          )}

          <button onClick={() => setShowDeleteCuisineForm(true)} className="admin-btn">
            Delete Cuisine
          </button>

          {showDeleteCuisineForm && (
            <div className="popup-overlay">
              <div className="popup-container">
                <button className="popup-close" onClick={() => setShowDeleteCuisineForm(false)}>
                  &times;
                </button>
                <form onSubmit={handleDeleteCuisine} className="admin-form">
                  <h2>Delete Cuisine</h2>
                  <input className='git'
                    type="number"
                    value={cuisineIdToDelete}
                    onChange={(e) => setCuisineIdToDelete(e.target.value)}
                    placeholder="Cuisine ID to delete"
                    required
                  />
                  <button type="submit" className="admin-btn">Delete Cuisine</button>
                </form>
              </div>
            </div>
          )}
        </div>
          <div>

            
        <section id="cuisine-management" className="admin-content">
          <h2 className='hit'>Available Cuisines</h2>
          <table className="admin-table">
            <thead>
              <tr>
                <th>Cuisine ID</th>
                <th>Cuisine Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {cuisines.length === 0 ? (
                <tr>
                  <td colSpan="3">No cuisines available</td>
                </tr>
              ) : (
                cuisines.map((cuisine) => (
                  <tr key={cuisine.cuisineId}>
                    <td>{cuisine.cuisineId}</td>
                    <td>{cuisine.cuisineName}</td>
                    <td>{cuisine.cuisineDescription}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </section>
              </div>
      </main>
    </div>
  );
};

export default CuisineMan;

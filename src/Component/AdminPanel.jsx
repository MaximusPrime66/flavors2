import React from 'react';
import './AdminPanel.css';

const AdminPanel = () => {
  return (
    <div className="admin-panel-container">
      <nav className="admin-sidebar">
        <h2>Recipe Admin</h2>
        <a href="#">Dashboard</a>
        <a href="#">Manage Recipes</a>
        <a href="#">Add Recipe</a>
        <a href="#">Settings</a>
      </nav>
      <div className="admin-main-content">
        <header className="admin-topbar">
          <h1>Admin Dashboard</h1>
          <div className="admin-user-info">
            <p>Welcome, Admin</p>
            <a href="#">Logout</a>
          </div>
        </header>
        <div className="admin-content">
          <div className="admin-cards">
            <div className="admin-card">
              <h3 className='mix'>Total Recipes</h3>
              <p className='max'>16 recipes</p>
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
            <button className="admin-btn">Add New Recipe</button>
            {/* <button className="admin-btn">Delete Recipe</button> */}
          </div>
          <div className="admin-recipe-sections">
            <section className="recipe-category">
              <h2>Italian Dishes</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Creator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Branzino al Forno</td>
                    <td>Chef Luigi</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Tiramisu</td>
                    <td>Chef Maria</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Arancini</td>
                    <td>Chef Mario</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="recipe-category">
              <h2>French Dishes</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Creator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Quiche Lorraine</td>
                    <td>Chef Pierre</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Ratatouille</td>
                    <td>Chef Pierre</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Crème Brûlée</td>
                    <td>Chef Pierre</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="recipe-category">
              <h2>Chinese Dishes</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Creator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Jasmine Tea</td>
                    <td>Chef Mei</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Kung Pao Chicken</td>
                    <td>Chef Wang</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Har Gow</td>
                    <td>Chef Li</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="recipe-category">
              <h2>Japanese Dishes</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Creator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Soba</td>
                    <td>Chef Hiro</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Donburi</td>
                    <td>Chef Kenji</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Dorayaki</td>
                    <td>Chef Aiko</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="recipe-category">
              <h2>Korean Dishes</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Creator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Tteok-bokki</td>
                    <td>Chef Jin</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Dakgalbi</td>
                    <td>Chef Soo</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Mochi</td>
                    <td>Chef Yuki</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section className="recipe-category">
              <h2>Indian Dishes</h2>
              <table className="admin-table">
                <thead>
                  <tr>
                    <th>Recipe Name</th>
                    <th>Creator</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Paneer Tikka</td>
                    <td>Chef Ravi</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Hyderabadi Biryani</td>
                    <td>Chef Priya</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                  <tr>
                    <td>Thandai</td>
                    <td>Chef Amit</td>
                    <td>
                      {/* <a href="#">Edit</a> */}
                      <a href="#">Delete</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">FLAVÖRS</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/countries">Cuisines</Link></li> 
        <li><Link to="/aboutus">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/admindashboard">Admin</Link></li>
      </ul>
      <div className="nav-buttons">
        <Link to="/login">Signup/Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;

import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Your navbar styles

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
  <span class="initial">T</span>
  <span class="suffix">S</span>

      </div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;

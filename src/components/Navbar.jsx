import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h2>BookStore CMS</h2>
        <ul className="items">
          <li>
            <Link to="/">Books</Link>
          </li>
          <li>
            <Link to="/Categories">Categories</Link>
          </li>
        </ul>
      </div>
      <div className="avatar">
        <FaUserAlt />
      </div>
    </nav>
  );
}

export default Navbar;

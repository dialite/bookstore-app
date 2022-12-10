import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <h1>Book Store</h1>
    <ul>
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories">Categories</Link>
      </li>
    </ul>
  </header>
);
export default NavBar;

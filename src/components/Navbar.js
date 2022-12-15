import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';
import userImg from '../asset/user.svg';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="left">
        <h2 className="website-logo">Bookstore CMS</h2>
        <ul>
          <li>
            <Link className="links" activeClassName="activelinks" key="1" to="/">Books</Link>
          </li>
          <li>
            <Link className="links" activeClassName="activelinks" key="2" to="/categories">Categories</Link>

          </li>
        </ul>
      </div>
      <div className="right">
        <img src={userImg} alt="user-img" />
      </div>
    </nav>
  );
}

export default Navbar;

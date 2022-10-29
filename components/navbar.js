import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <Link to="/npmhos">Npmhos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li>
            <NavLink to="/" className="nav-link" end>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/todo" className="nav-link">
              Todo
            </NavLink>
          </li>
          <li>
            <NavLink to="/github" className="nav-link">
              GitHub
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

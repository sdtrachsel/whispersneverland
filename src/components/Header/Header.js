import React from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <Link to="/" >
        <div className="logo">Logo here</div>
      </Link>
      <nav>
        <NavLink className="nav-link" to="/journal">Journal</NavLink>
        <NavLink className="nav-link" to="/journal">Add Entry</NavLink>
      </nav>
    </header>
  )
}

export default Header;
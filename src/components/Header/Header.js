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
        <NavLink  to="/journal" className={isActive => "nav-link" + (!isActive? ' unselected': "")}>Journal</NavLink>
        <NavLink  to="/newentry" className={isActive => "nav-link" + (!isActive? ' unselected': "")}>Add Entry</NavLink>
      </nav>
    </header>
  )
}

export default Header;
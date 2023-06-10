import React from "react";
import './Header.css'
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/moon-logo2.png"

const Header = () => {
  return (
    <header>
      <Link data-cy="link-home" to="/" >
        <img className="logo" src={logo} alt="Whispers from Neverland"/>
      </Link>
      <nav>
        <NavLink data-cy="link-journal" to="/journal" className={isActive => "nav-link" + (!isActive? ' unselected': "")}>Journal</NavLink>
        <NavLink data-cy="link-newentry" to="/newentry" className={isActive => "nav-link" + (!isActive? ' unselected': "")}>Add Entry</NavLink>
      </nav>
    </header>
  )
}

export default Header;
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {

  return (
    <div className="NavBar">
      <Link to="/" className="NavBar__name" id="logo">
        Niek Veenstra
      </Link>

      <ul className="NavBar__menu">
        <li>
          <Link className="link" to="home">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="about">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="skills">
            Skills
          </Link>
        </li>
        <li>
          <Link className="link" to="work">
            Work
          </Link>
        </li>
        <li>
          <Link className="link" to="contact">
            Contact
          </Link>
        </li>
      </ul>
      <div className="NavBar__mobmenu">
        <span className="NavBar__line1"></span>
        <span className="NavBar__line2"></span>
        <span className="NavBar__line3"></span>
      </div>
    </div>
  );
};

export default NavBar;

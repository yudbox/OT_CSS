import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="#" className="header-logo">
        Logo
      </a>
      <ul className="header-menu">
        <li className="header-menu-item">
          <a href="#">Logo</a>
        </li>
        <li className="header-menu-item">
          <a href="#">About</a>
        </li>
        <li className="header-menu-item">
          <a href="#">Services</a>
        </li>
        <li className="header-menu-item">
          <a href="#">Portfolio</a>
        </li>
        <li className="header-menu-item">
          <a href="#">Team</a>
        </li>
        <li className="header-menu-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

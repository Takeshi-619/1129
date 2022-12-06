import React from "react";
import logo from "/vite.svg";

const Header = () => {
  return (
    <header>
      <img className="logo" src={logo} alt="" />
      <ul>
        <li>
          <a href="/">To Top</a>
        </li>
        <li>
          <a href="/jec">To Jec</a>
        </li>
        <li>
          <a href="/About"> To About</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;

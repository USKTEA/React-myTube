import React from "react";
import searchBarIcon from "../img_assets/searchBarIcon.png";

function Header(props) {
  return (
    <header className="nav-bar">
      <img id="search-bar-icon" src={searchBarIcon} alt="mushroom"></img>
      {props.children}
    </header>
  );
}

export default Header;

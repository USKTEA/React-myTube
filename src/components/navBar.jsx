import React from "react";
import searchBarIcon from "../img_assets/searchBarIcon.png";

function NavBar(props) {
  return (
    <nav className="nav-bar">
      <img id="search-bar-icon" src={searchBarIcon} alt="mushroom"></img>
      {props.children}
    </nav>
  );
}

export default NavBar;

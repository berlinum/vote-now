import React from "react";
import "./Header.css";
import Vote from "./vote-now.png";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={Vote} alt="logo vote now"></img>
    </header>
  );
}

export default Header;

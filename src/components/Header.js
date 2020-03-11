import React from "react";
import "./Header.css";
import Vote from "./vote-now.png";
import Bar from "./status-bar2.png";

function Header() {
  return (
    <header className="header">
      <img className="status-bar" src={Bar} alt="logo vote now"></img>
      <img className="logo" src={Vote} alt="logo vote now"></img>
    </header>
  );
}

export default Header;

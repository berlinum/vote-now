import React from "react";
import "./Header.css";
import Vote from "./vote-now.png";
import Bar1 from "./status-bar-time.svg";
import Bar2 from "./status-bar-battery.svg";

function Header() {
  return (
    <header className="header">
      <div className="status-bar">
        <img className="status-bar-time" src={Bar1} alt="status bar time"></img>
        <img
          className="status-bar-battery"
          src={Bar2}
          alt="status bar battery"
        ></img>
      </div>
      <img className="logo" src={Vote} alt="logo vote now"></img>
    </header>
  );
}

export default Header;

import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="button__container">
      <button className={props.class}>{props.buttonName}</button>
    </div>
  );
}

export default Button;

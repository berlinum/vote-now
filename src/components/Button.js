import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";

function Button(props) {
  return (
    <div className="button__container">
      <Link to={props.link}>
        <button type="button" className={props.class}>
          {props.buttonName}
        </button>
      </Link>
    </div>
  );
}

export default Button;

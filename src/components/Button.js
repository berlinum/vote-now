import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <div className="button__container">
      <button className={props.class}>{props.buttonName}</button>
    </div>
  );
}

export default Button;

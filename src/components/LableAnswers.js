import React from "react";
import "./LableAnswers.css";

function LableAnswers(props) {
  return <label className="answers__label">{props.title}</label>;
}

export default LableAnswers;

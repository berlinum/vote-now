import React from "react";
import "./AnswersBox.css";

function AnswersBox(props) {
  return <div className="answers-box">{props.children}</div>;
}
export default AnswersBox;

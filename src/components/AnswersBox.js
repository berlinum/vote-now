import React from "react";
import "./AnswersBox.css";

function AnswersBox(props) {
  return <div className="AnswersBox">{props.children}</div>;
}
export default AnswersBox;

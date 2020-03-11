import React from "react";
import "./Question.css";

function Question(props) {
  return (
    <form className="question__box">
      <label className="question__label">{props.title}</label>
      <input
        className="question__input"
        type="text"
        placeholder="What kind of beer do you like?"
      ></input>
    </form>
  );
}

export default Question;

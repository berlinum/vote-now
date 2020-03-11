import React from "react";
import "./Question.css";

function Question() {
  return (
    <form className="question__box">
      <label className="question__label">Your question:</label>
      <input
        className="question__input"
        type="text"
        placeholder="What kind of beer do you like?"
      ></input>
    </form>
  );
}

export default Question;

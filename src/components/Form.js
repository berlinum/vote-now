import React from "react";
import "./Form.css";
import Button from "./Button";
import App from "../App";

function Form(props) {
  return (
    <form className="form__box">
      <label className="question__label">{props.question}</label>
      <input
        className="question__input"
        type="text"
        placeholder="Enter question..."
      ></input>
      <label className="answers__label">{props.answers}</label>
      <input className="answer__input" type="text" placeholder="Lager"></input>
      <input className="answer__input" type="text" placeholder="Malt"></input>
      <input className="answer__input" type="text" placeholder="Ale"></input>
      <Button buttonName="Create poll" class="button__new" link="/vote" />
    </form>
  );
}

export default Form;

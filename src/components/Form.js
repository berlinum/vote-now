import React from "react";
import "./Form.css";
import Button from "./Button";

function Form(props) {
  const [question, setQuestion] = React.useState("");
  const [answerOne, setAnswerOne] = React.useState("");
  const [answerTwo, setAnswerTwo] = React.useState("");
  const [answerThree, setAnswerThree] = React.useState("");
  const poll = {
    question: question,
    answerOne: answerOne,
    answerTwo: answerTwo,
    answerThree: answerThree
  };

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(poll);
  }
  return (
    <form className="form__box" onSubmit={handleSubmit}>
      <label className="question__label">{props.question}</label>
      <input
        className="question__input"
        type="text"
        placeholder="Enter question..."
        value={question}
        onChange={event => {
          setQuestion(event.target.value);
        }}
      ></input>
      <label className="answers__label">{props.answers}</label>
      <input
        className="answer__input"
        type="text"
        placeholder="Lager"
        value={answerOne}
        onChange={event => {
          setAnswerOne(event.target.value);
        }}
      ></input>
      <input
        className="answer__input"
        type="text"
        placeholder="Malt"
        value={answerTwo}
        onChange={event => {
          setAnswerTwo(event.target.value);
        }}
      ></input>
      <input
        className="answer__input"
        type="text"
        placeholder="Ale"
        value={answerThree}
        onChange={event => {
          setAnswerThree(event.target.value);
        }}
      ></input>
      <Button buttonName="Create poll" class="button__new" />
    </form>
  );
}

export default Form;

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

  async function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(poll);
    await fetch("http://localhost:4000/polls", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
      },
      body: JSON.stringify(poll)
    });
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
        placeholder="Answer 1"
        value={answerOne}
        onChange={event => {
          setAnswerOne(event.target.value);
        }}
      ></input>
      <input
        className="answer__input"
        type="text"
        placeholder="Answer 2"
        value={answerTwo}
        onChange={event => {
          setAnswerTwo(event.target.value);
        }}
      ></input>
      <input
        className="answer__input"
        type="text"
        placeholder="Answer 3"
        value={answerThree}
        onChange={event => {
          setAnswerThree(event.target.value);
        }}
      ></input>
      <Button buttonName="Create poll" class="button" />
    </form>
  );
}

export default Form;

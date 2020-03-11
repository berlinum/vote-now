import React from "react";
import "./New.css";
// import AnswersBox from "../components/AnswersBox";
// import Answer from "../components/Answer";
import Button from "../components/Button";
import Question from "../components/Question";

function New() {
  return (
    <>
      <Question title="Your question: " />
      <Button button="Create poll" class="button__new" link="/vote" />
    </>
  );
}

export default New;

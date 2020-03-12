import React from "react";
import "./New.css";
import AnswersBox from "../components/AnswersBox";
import Answer from "../components/Answer";
import Button from "../components/Button";
import Question from "../components/Question";
import LableAnswers from "../components/LableAnswers";

function New() {
  return (
    <>
      <Question title="Your question: " />
      <AnswersBox>
        <LableAnswers title="Answer options:" />
        <Answer />
        <Answer />
        <Answer />
      </AnswersBox>
      <Button button="Create poll" class="button__new" link="/vote" />
    </>
  );
}

export default New;

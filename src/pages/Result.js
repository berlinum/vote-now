import React from "react";
import "./Result.css";
import Question from "../components/Question";
import AnswersBox from "../components/AnswersBox";
import LableAnswers from "../components/LableAnswers";
import Answer from "../components/Answer";
import Button from "../components/Button";

function Result() {
  return (
    <>
      <Question title="Question: " />
      <AnswersBox>
        <LableAnswers title="Results:" />
        <Answer />
        <Answer />
        <Answer />
      </AnswersBox>
      <Button button="Create new poll" class="button__result" link="/" />
    </>
  );
}

export default Result;

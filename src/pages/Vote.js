import React from "react";
import "./Vote.css";
import Question from "../components/Question";
import AnswersBox from "../components/AnswersBox";
import LableAnswers from "../components/LableAnswers";
import Answer from "../components/Answer";
import Button from "../components/Button";

function Vote() {
  return (
    <>
      <Question title="Question:" />
      <AnswersBox>
        <LableAnswers title="Your answer:" />
        <Answer />
        <Answer />
        <Answer />
      </AnswersBox>
      <Button button="Vote" class="button__vote" link="/result" />;
    </>
  );
}
export default Vote;

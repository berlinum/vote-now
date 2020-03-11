import React from "react";
import "./Result.css";
import Button from "../components/Button";
import Question from "../components/Question";

function Result() {
  return (
    <>
      <Question title="Question: " />
      <Button button="Create new poll" class="button__result" link="/" />
    </>
  );
}

export default Result;

import React from "react";
// import { Link } from "react-router-dom";
import "./New.css";
import AnswersBox from "../components/AnswersBox";
import Answer from "../components/Answer";
import Button from "../components/Button";

function New() {
  return (
    (
      <AnswersBox>
        <Answer></Answer>
        <Answer></Answer>
        <Answer></Answer>
      </AnswersBox>
    ),
    (<Button button="Create poll" class="button__new" link="/vote" />)
  );
}

export default New;

import React from "react";
import "./Vote.css";
import Button from "../components/Button";
import Question from "../components/Question";

function Vote() {
  return (
    <>
      <Question title="Question:" />
      <Button button="Vote" class="button__vote" link="/result" />;
    </>
  );
}
export default Vote;
